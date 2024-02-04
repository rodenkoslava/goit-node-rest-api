const Joi = require("joi");

const authSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required(),
  password: Joi.string().min(6).required(),
});

module.exports = authSchema;
