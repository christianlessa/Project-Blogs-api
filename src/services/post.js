const { BlogPost } = require('../database/models');
const { Category } = require('../database/models');

const create = async (userId, title, content, categoryIds) => {
  await Promise.all(
    categoryIds.forEach(async (id) => {
      const idCateg = await Category.findOne({ where: { id } });
      if (!idCateg) throw Error('"categoryIds" not found');
    }),
  );

  const postCreated = await BlogPost.create({
    title,
    content,
    userId,
    updated: Date.now(),
    published: Date.now(),
  });

  return postCreated;
};

module.exports = {
  create,
};