const { Category } = require('../database/models');

const create = async (name) => {
  const userCreated = await Category.create({ name });
  return userCreated;
};

module.exports = {
  create,
};
