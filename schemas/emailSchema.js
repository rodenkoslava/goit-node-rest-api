const Joi = require("joi");

const emailSchema = Joi.object({
  email: Joi.string()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required(),
});

module.exports = emailSchema;
