const { Category } = require('../database/models');

const create = async (name) => {
  const categoryCreated = await Category.create({ name });
  return categoryCreated;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};
