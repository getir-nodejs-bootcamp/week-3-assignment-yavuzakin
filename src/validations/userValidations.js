const Joi = require('joi');

exports.checkUserBody = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required()
    }).required()
});

exports.checkUserBodyOptional = Joi.object({
    name: Joi.string(),
    username: Joi.string(),
    email: Joi.string().email(),
    address: Joi.object({
        street: Joi.string(),
        city: Joi.string()
    })
});
