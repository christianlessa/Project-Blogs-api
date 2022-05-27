const { BlogPost, Category, User } = require('../database/models');

const create = async (userId, title, content, categoryIds) => {
  const promise = await Promise.all(
    categoryIds.map(async (id) => {
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

  await postCreated.addCategory(promise);

  return postCreated;
};

const getAll = async () => {
  const allInfor = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Category,
      as: 'categories',
    }],
  });
  return allInfor;
};

const getById = async (id) => {
  const allInfor = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Category,
      as: 'categories',
    }],
  });

  if (!allInfor) throw Error('Post does not exist');

  return allInfor;
};

module.exports = {
  create,
  getAll,
  getById,
};