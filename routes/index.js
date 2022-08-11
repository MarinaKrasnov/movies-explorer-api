const router = require('express').Router();
const auth = require('../middlewares/auth');
const MovieRouter = require('./movies');
const UserRouter = require('./users');
const { createUser, login, signout } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-error');
const { validateSignin, validateSignup } = require('../middlewares/validator');
const { ERROR_MESSAGES } = require('../utils/constants');

router.use('/movies', auth, MovieRouter);
router.use('/users', auth, UserRouter);

router.post(
  '/signup',
  validateSignup,
  createUser,
);
router.post(
  '/signin',
  validateSignin,
  login,
);
router.post(
  '/signout',
  auth,
  signout,
);
router.use('*', auth, () => {
  throw new NotFoundError(ERROR_MESSAGES.notFound);
});
module.exports = router;
