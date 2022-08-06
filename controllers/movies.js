const BadRequestError = require('../errors/bad-request-err');
const ForbidError = require('../errors/forbid-err');
const NotFoundError = require('../errors/not-found-error');
const Movie = require('../models/movie');

module.exports.getMovies = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.send(movies.slice(0, 29));
    })
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
        next(new BadRequestError('Некорректные данные'));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      if (!movie) {
        next(new NotFoundError('Карточка по указанному id не найдена'));
      } else if (req.user._id !== Movie.owner.toString()) {
        next(new ForbidError('У вас нет прав на удаление'));
      }
      return Movie.findByIdAndRemove(req.params._id)
        .then((movieObj) => res.status(200).send({ data: movieObj })).catch(next);
    }).catch(next);
};
