const Joi = require('joi');

exports.checkPostBody = Joi.object({
    userId: Joi.number().integer().min(1).max(10).required(),
    title: Joi.string().required(),
    body: Joi.string().required()
});

exports.checkPostBodyOptional = Joi.object({
    userId: Joi.number().integer().min(1).max(10),
    title: Joi.string(),
    body: Joi.string()
});