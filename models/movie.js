const mongoose = require('mongoose');
const validator = require('validator');
const { MESSAGES } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, MESSAGES.input],
  },
  director: {
    type: String,
    required: [true, MESSAGES.input],
  },
  duration: {
    type: Number,
    required: [true, MESSAGES.input],
  },
  year: {
    type: String,
    required: [true, MESSAGES.input],
  },
  description: {
    type: String,
    required: [true, MESSAGES.input],
  },
  image: {
    type: String,
    required: [true, MESSAGES.input],
    validate: {
      validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
      message: MESSAGES.url,
    },
  },
  trailerLink: {
    type: String,
    required: [true, MESSAGES.input],
    validate: {
      validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
      message: MESSAGES.url,
    },
  },
  thumbnail: {
    type: String,
    required: [true, MESSAGES.input],
    validate: {
      validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
      message: MESSAGES.url,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movie',
  },
  nameRU: {
    type: String,
    required: [true, MESSAGES.input],
  },
  nameEN: {
    type: String,
    required: [true, MESSAGES.input],
  },
});

module.exports = mongoose.model('movie', movieSchema);
