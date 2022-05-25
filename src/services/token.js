const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (id) => {
  const token = jwt.sign(id, secret, jwtConfig);
  return token;
};

const decodingToken = (authorization) => {
  const decodedToken = jwt.verify(authorization, secret);
  return decodedToken;
};

module.exports = {
  generateToken,
  decodingToken,
};
