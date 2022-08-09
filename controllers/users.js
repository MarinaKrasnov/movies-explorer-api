const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const BadRequestError = require('../errors/bad-request-err');
const ConflictError = require('../errors/conflict-err');
const NotFoundError = require('../errors/not-found-error');
const UnauthorizedError = require('../errors/unauth');
const User = require('../models/user');

module.exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => res.status(200).send(users))
    .catch(next);
};
module.exports.getUserById = (req, res, next) => {
  const { _id } = req.params;
  User.findById(_id)
    .then((user) => {
      if (!user) {
        next(new NotFoundError('Пользователь не найден'));
      } else {
        res.status(200).send(user);
      }
    })
    .catch(next);
};
module.exports.getUser = (req, res, next) => {
  const _id = req.user.id;
  User.findById(_id)
    .then((user) => {
      if (!user) {
        next(new NotFoundError('Пользователь не найден'));
      } else {
        res.status(200).send(user);
      }
    })
    .catch(next);
};
module.exports.createUser = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new ConflictError('Такой пользователь уже существует');
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hash) => {
      User.create({
        name,
        email,
        password: hash,
      })
        .then((user) => res.status(201).send({
          name: user.name,
          email: req.body.email,
        }))
        .catch((err) => {
          if (err.name === 'ValidationError') {
            next(new BadRequestError('Некорректные данные'));
          } else {
            next(err);
          }
        });
    }).catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { id } = req.user;
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    id,
    { $set: { name, about } },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) {
        next(new NotFoundError('Пользователь не найден'));
      } else {
        res.send(user);
      }
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findOne({ email }).select('+password').then((user) => {
    if (!user) {
      return next(new UnauthorizedError('Пользователь не найден'));
    }
    return bcrypt.compare(password, user.password)
      .then((matched) => {
        if (!matched) {
          return next(new UnauthorizedError('Неправильные почта или пароль'));
        }
        const token = jwt.sign({ id: user.id }, process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
        res.header('authorization', `Bearer ${token}`);
        return res.cookie('jwt', token, { httpOnly: true, sameSite: true }).status(200).send({
          name: user.name,
          email: user.email,
          _id: user.id,
          token,
        });
      })
      .catch(next);
  });
};
