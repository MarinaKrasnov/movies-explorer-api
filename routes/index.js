const router = require('express').Router();
const {
  celebrate, Joi,
} = require('celebrate');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const MovieRouter = require('./movies');
const UserRouter = require('./users');

router.use('/movies', auth, MovieRouter);
router.use('/users', UserRouter);

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      name: Joi.string().min(2).max(30),
    }),
  }),
  createUser,
);
router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);
module.exports = router;
