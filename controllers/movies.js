const BadRequestError = require('../errors/bad-request-err');
const ForbidError = require('../errors/forbid-err');
const NotFoundError = require('../errors/not-found-error');
const Movie = require('../models/movie');
const ERROR_MESSAGES = require('../utils/constants');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user.id;
  Movie.find({ owner })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description, image, trailerLink, thumbnail, nameRU, nameEN,
  } = req.body;
  const owner = req.user.id;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRU,
    nameEN,
    owner,
  })
    .then((movie) => {
      res.status(201).send(movie);
    }).catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError(ERROR_MESSAGES.dataBadRequest));
      }
      return next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) {
        return next(new NotFoundError(ERROR_MESSAGES.notFound));
      } if (req.user.id !== movie.owner.toString()) {
        return next(new ForbidError(ERROR_MESSAGES.deleteMovie));
      }
      return Movie.findByIdAndRemove(movieId)
        .then((movieObj) => res.status(200).send({ data: movieObj })).catch(next);
    }).catch(next);
};
