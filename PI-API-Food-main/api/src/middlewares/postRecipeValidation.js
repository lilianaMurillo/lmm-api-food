const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name, summary, steps, diets } = req.body;
  if (name, summary, steps, diets) return next();
  else throw new ClientError("Necessary fields missing", 400);
};
