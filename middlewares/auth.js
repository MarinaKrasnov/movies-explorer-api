const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauth');
const { ERROR_MESSAGES } = require('../utils/constants');

const auth = (req, res, next) => {
  const { cookies } = req;
  const { authorization } = req.headers;
  if (cookies.jwt || authorization) {
    const token = cookies.jwt ? cookies.jwt : authorization.replace('Bearer ', '');
    let payload;
    try {
      payload = jwt.verify(token, process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'dev-secret');
    } catch (err) {
      return next(new UnauthorizedError(ERROR_MESSAGES.jwtChecked));
    }
    if (payload) {
      req.user = payload;
    }
  } else {
    return next(new UnauthorizedError(ERROR_MESSAGES.jwtNotValid));
  }
  return next();
};
module.exports = auth;
