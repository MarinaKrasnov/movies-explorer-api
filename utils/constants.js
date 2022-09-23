const { NODE_ENV, URLS_FOR_CORS, URL_DB } = process.env;
const ValidateUrl = /^https?:\/\/(www\.)?[a-zA-Z\d-]+\.[\w\d\-.~:/?#[\]@!$&'()*+,;=]{2,}#?$/;
module.exports = ValidateUrl;
module.exports.ERROR_MESSAGES = {
  notFound: 'Requested resource not found.',
  unauthorized: 'Authorization Required',
  serverError: 'An error has occured on the server.',
  dataBadRequest: 'Data validation failed.',
  movieNotFound: 'Movie not found.',
  deleteMovie: 'You dont have right to delete this movie.',
  signin: 'Incorrect email or password.',
  signup: 'Unable to create a user with the credentials provided.',
  userExists: 'Such a user already exists.',
  userBadRequest: 'User not found.',
  jwtChecked: 'Jwts been checked. jwt is not valid',
  jwtNotValid: 'Jwt not valid',
};

module.exports.MESSAGES = {
  cookies: 'Cookie has been deleted',
  url: 'Url expected',
  input: 'Please fill',
};

module.exports.CODES = {
  mongo: 11000,
};

module.exports.CORS_ALLOWED = NODE_ENV === 'production' ? URLS_FOR_CORS : ['http://localhost:3000', 'https://localhost:3000'];
module.exports.URL_MONGO = NODE_ENV === 'production' ? URL_DB : 'mongodb://localhost:27017/moviesdb';
