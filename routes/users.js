const UserRouter = require('express').Router();
const {
  updateUser, getUser,
} = require('../controllers/users');
const { validateUpdateUser } = require('../middlewares/validator');

UserRouter.get('/me', getUser);

UserRouter.patch('/me', validateUpdateUser, updateUser);
module.exports = UserRouter;
