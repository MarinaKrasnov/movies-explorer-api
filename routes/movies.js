const MovieRouter = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
const { validatePostMovie, validateDeleteMovie } = require('../middlewares/validator');

MovieRouter.get('/', getMovies);
MovieRouter.post(
  '/',
  validatePostMovie,
  createMovie,
);
MovieRouter.delete(
  '/:_id',
  validateDeleteMovie,
  deleteMovie,
);
module.exports = MovieRouter;
