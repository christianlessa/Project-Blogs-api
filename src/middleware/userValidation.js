const displayNameValid = (req, res, next) => {
  const { displayName } = req.body;
  const text = { message: '"displayName" length must be at least 8 characters long' };

  if (displayName.length < 8) return res.status(400).json(text);

  next();
};

const emailValid = (req, res, next) => {
  const { email } = req.body;
  const text = { message: '"email" must be a valid email' };

  // referencia do regex: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

  if (!email.match(/\S+@\S+\.\S+/)) return res.status(400).json(text);

  next();
};

const passwordValid = (req, res, next) => {
  const { password } = req.body;
  const text = { message: '"password" length must be at least 6 characters long' };

  if (password.length < 6) return res.status(400).json(text);

  next();
};

module.exports = {
  displayNameValid,
  emailValid,
  passwordValid,
};