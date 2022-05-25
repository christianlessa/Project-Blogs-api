const servicesCategories = require('../services/categories');

const create = async (req, res) => {
  const { name } = req.body;

  try {
    const categoryCreated = await servicesCategories.create(name);
    return res.status(201).json(categoryCreated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await servicesCategories.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
};
