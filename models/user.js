const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Поле должно содержать не меньше двух символов'],
    maxlength: [30, 'Поле должно содержать не меньше 30 символов'],
    default: 'Guest',
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Введите адрес электронной почты',
    },
  },
  password: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    select: false,
  },
});
module.exports = mongoose.model('user', userSchema);
