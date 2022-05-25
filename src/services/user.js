const { User } = require('../database/models');
// const token = require('./token');

const create = async (displayName, email, password, image) => {
  const verifyEmail = await User.findOne({ where: { email } });
  
  if (verifyEmail) throw Error('User already registered');
  if (!verifyEmail) return User.create({ displayName, email, password, image });
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};
const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: 'password' },
  });

  if (!user) throw Error('User does not exist');

  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};
