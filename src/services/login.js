const { User } = require('../database/models');
const token = require('./token');

const create = async (displayName, email, password, image) => {
  if (!(email || password)) throw Error('Some required fields are missing');

  const verifyUser = await User.findOne({ where: { email, password } });
  
  if (!verifyUser) throw Error('Invalid fields');
  
  await User.create({ displayName, email, password, image });
  
  const newToken = token.generateToken({ id: verifyUser.dataValues.id });
  return newToken;
};

module.exports = {
  create,
};
