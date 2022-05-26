const postServices = require('../services/post');

const create = async (req, res) => {
  const { id } = req.user;
  const { title, content, categoryIds } = req.body;
 
  try {
    const postCreated = await postServices.create(id, title, content, categoryIds);
    return res.status(201).json(postCreated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
};