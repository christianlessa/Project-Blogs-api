const { User } = require('../database/models');
// const token = require('./token');

const create = async (displayName, email, password, image) => {
  const verifyEmail = await User.findOne({ where: { email } });
  
  if (verifyEmail) throw Error('User already registered');
  if (!verifyEmail) return User.create({ displayName, email, password, image });
};

module.exports = {
  create,
};
