const token = require('../services/token');

const authorizationUser = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).jso({ message: 'Token not found' });

  try {
    const decodedToken = token.decodingToken(authorization);
    req.user = decodedToken;
    
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { authorizationUser };