const MovieRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
/* const auth = require('../middlewares/auth'); */
const ValidateUrl = require('../utils/constants');
const auth = require('../middlewares/auth');

MovieRouter.get('/', auth, getMovies);
MovieRouter.post(
  '/',
  auth,
  celebrate({
    body: Joi.object().keys({
      image: Joi.string().uri().required().pattern(ValidateUrl),
      trailerLink: Joi.string().uri().required().pattern(ValidateUrl),
      thumbnail: Joi.string().uri().required().pattern(ValidateUrl),
    }).unknown(),
  }),
  createMovie,
);
MovieRouter.delete(
  '/:movieId',
  auth,
  celebrate({
    params: Joi.object().keys({
      movieId: Joi.string().length(24).hex(),
    }),
  }),
  deleteMovie,
);
module.exports = MovieRouter;
