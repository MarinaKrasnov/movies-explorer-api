const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const BadRequestError = require('../errors/bad-request-err');
const ConflictError = require('../errors/conflict-err');
const NotFoundError = require('../errors/not-found-error');
const UnauthorizedError = require('../errors/unauth');
const User = require('../models/user');
const { ERROR_MESSAGES, MESSAGES, CODES } = require('../utils/constants');

module.exports.getUser = (req, res, next) => {
  const _id = req.user.id;
  User.findById(_id)
    .then((user) => {
      if (!user) {
        next(new NotFoundError(ERROR_MESSAGES.userBadRequest));
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
        throw new ConflictError(ERROR_MESSAGES.signup);
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
            next(new BadRequestError(ERROR_MESSAGES.dataBadRequest));
          } else {
            next(err);
          }
        });
    }).catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { id } = req.user;
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    id,
    { $set: { name, email } },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) {
        return next(new NotFoundError(ERROR_MESSAGES.userBadRequest));
      }
      return res.send(user);
    }).catch((err) => {
      if (err.code === CODES.mongo) {
        return next(new ConflictError(ERROR_MESSAGES.userExists));
      }
      return next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findOne({ email }).select('+password').then((user) => {
    if (!user) {
      return next(new UnauthorizedError(ERROR_MESSAGES.userBadRequest));
    }
    return bcrypt.compare(password, user.password)
      .then((matched) => {
        if (!matched) {
          return next(new UnauthorizedError(ERROR_MESSAGES.signin));
        }
        const token = jwt.sign({ id: user.id }, process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
        /*   res.header('authorization', `Bearer ${token}`); */
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

module.exports.signout = (req, res) => {
  res.clearCookie('jwt').send({ message: MESSAGES.cookies });
};
