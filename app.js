const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
/* const path = require('path'); */
const cors = require('cors');
const { errors } = require('celebrate');
const helmet = require('helmet');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const {
  PORT = 3000, URL_DB, NODE_ENV, URLS_FOR_CORS,
} = process.env;
const { limiter } = require('./middlewares/rate-limit');
const { ERROR_MESSAGES } = require('./utils/constants');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors({ origin: NODE_ENV === 'production' ? URLS_FOR_CORS : ['http://localhost:3000', 'https://localhost:3000'], credentials: true }));
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
mongoose.connect(NODE_ENV === 'production' ? URL_DB : 'mongodb://localhost:27017/moviesdb');
/* app.use(express.static(path.join(__dirname, 'build'))); */
app.use(requestLogger);
app.use('/', router);

app.use(limiter);
app.use(errorLogger);
app.use(errors());
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? ERROR_MESSAGES.serverError
        : message,
    });
  next();
});
app.listen(PORT);
