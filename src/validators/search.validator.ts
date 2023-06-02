import Joi from "joi";

export const joiTitle = Joi.object({
    title: Joi.string().min(1).required().messages({
        'string.empty': 'Min 1 character',
        'string.min': 'Min 1 character'
    })
});
