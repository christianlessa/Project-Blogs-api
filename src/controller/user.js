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

module.exports = {
  create,
};