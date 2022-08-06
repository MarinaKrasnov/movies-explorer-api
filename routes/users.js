const UserRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, updateUser, getUserById, getUser,
} = require('../controllers/users');
/* const auth = require('../middlewares/auth'); */

UserRouter.get('/', /* auth */ () => getUsers);
UserRouter.get(
  '/me',
  /*  auth, */
  getUser,
);
UserRouter.get(
  '/_id',
  /* auth, */
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().length(24).hex(),
    }),
  }),
  getUserById,
);

UserRouter.patch(
  '/me',
  /*   auth, */
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      name: Joi.string().min(2).max(30),
    }),
  }),
  updateUser,
);
module.exports = UserRouter;
