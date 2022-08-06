const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    minlength: [2, 'Поле должно содержать не меньше двух символов'],
    maxlength: [30, 'Поле должно содержать не меньше 30 символов'],
    required: [true, 'Поле должно быть заполнено'],
  },
  director: {
    type: String,
    minlength: [2, 'Поле должно содержать не меньше двух символов'],
    maxlength: [30, 'Поле должно содержать не меньше 30 символов'],
    required: [true, 'Поле должно быть заполнено'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  year: {
    type: Number,
    required: [true, 'Поле должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
     validate: {
      validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
      message: 'Нужно ввести ссылку',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
      message: 'Нужно ввести ссылку',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
      message: 'Нужно ввести ссылку',
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
    minlength: [2, 'Поле должно содержать не меньше двух символов'],
    maxlength: [30, 'Поле должно содержать не меньше 30 символов'],
    required: [true, 'Поле должно быть заполнено'],
  },
  nameEN: {
    type: String,
    minlength: [2, 'Поле должно содержать не меньше двух символов'],
    maxlength: [30, 'Поле должно содержать не меньше 30 символов'],
    required: [true, 'Поле должно быть заполнено'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
