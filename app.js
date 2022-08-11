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

const { PORT = 3000 } = process.env;
const { limiter } = require('./middlewares/rate-limit');
const { errorsHandling } = require('./middlewares/error-handle');
const { CORS_ALLOWED, URL_MONGO } = require('./utils/constants');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: CORS_ALLOWED, credentials: true }));
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
mongoose.connect(URL_MONGO);
app.use(helmet());
/* app.use(express.static(path.join(__dirname, 'build'))); */
app.use(requestLogger);
app.use(limiter);
app.use('/', router);

app.use(errorLogger);
app.use(errors());
app.use(errorsHandling);
app.listen(PORT);
