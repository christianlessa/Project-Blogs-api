const titleValid = (req, res, next) => {
  if (
    !req.body.title || req.body.title.length === 0
  ) return res.status(400).json({ message: 'Some required fields are missing' });

  next();
};

const contentValid = (req, res, next) => {
  if (
    !req.body.content || req.body.content.length === 0
  ) return res.status(400).json({ message: 'Some required fields are missing' });

  next();
};

const categoryIdValid = (req, res, next) => {
  if (
    !req.body.categoryIds || req.body.categoryIds.length === 0
  ) return res.status(400).json({ message: 'Some required fields are missing' });

  next();
};

module.exports = {
  titleValid,
  contentValid,
  categoryIdValid,
};