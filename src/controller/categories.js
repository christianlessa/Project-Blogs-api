const servicesCategories = require('../services/categories');

const create = async (req, res) => {
  const { name } = req.body;

  try {
    const userCreated = await servicesCategories.create(name);
    return res.status(201).json(userCreated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
};
