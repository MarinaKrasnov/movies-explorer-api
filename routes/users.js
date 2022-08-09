const UserRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  updateUser, getUserById, getUser,
} = require('../controllers/users');

UserRouter.get(
  '/me',
  getUser,
);
UserRouter.get(
  '/userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().length(24).hex(),
    }),
  }),
  getUserById,
);

UserRouter.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      name: Joi.string().min(2).max(30),
    }).unknown(),
  }),
  updateUser,
);
module.exports = UserRouter;
