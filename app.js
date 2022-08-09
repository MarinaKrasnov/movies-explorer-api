const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
/* const path = require('path'); */
const cors = require('cors');
const { errors } = require('celebrate');
/* const auth = require('./middlewares/auth'); */
const NotFoundError = require('./errors/not-found-error');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000', 'https://localhost:3000', 'http://marina.nomorepartiesxyz.ru', 'https://marina.nomorepartiesxyz.ru', 'http://api.marina.nomorepartiesxyz.ru', 'https://api.marina.nomorepartiesxyz.ru', 'api.marina.nomorepartiesxyz.ru', 'marina.nomorepartiesxyz.ru'], credentials: true }));
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
mongoose.connect('mongodb://localhost:27017/bitfilmsdb');
/* app.use(express.static(path.join(__dirname, 'build'))); */
app.use(requestLogger);

app.use('/', router);
app.use('*', () => {
  throw new NotFoundError('Not found');
});
app.use(errorLogger);
app.use(errors());
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
  next();
});
app.listen(PORT);
