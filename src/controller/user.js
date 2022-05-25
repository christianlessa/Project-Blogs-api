const userServices = require('../services/user');
const newToken = require('../services/token');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  try {
    const result = await userServices.create(displayName, email, password, image);
    const token = newToken.generateToken({ id: result.dataValues.id });
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userServices.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userServices.getById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
};