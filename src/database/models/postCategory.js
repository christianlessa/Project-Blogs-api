module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: "postId",
      as: "blogPost",
      through: PostCategory,
      otherKey: "categoryId"
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: "categoryId",
      as: "categories",
      through: PostCategory,
      otherKey: "postId"
    });
  };

  return PostCategory;
};