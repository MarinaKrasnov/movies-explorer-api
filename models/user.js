const mongoose = require('mongoose');
const validator = require('validator');
const { MESSAGES } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: [true],
  },
  email: {
    type: String,
    unique: true,
    required: [true, MESSAGES.input],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: MESSAGES.url,
    },
  },
  password: {
    type: String,
    required: [true, MESSAGES.input],
    select: false,
  },
});
module.exports = mongoose.model('user', userSchema);
