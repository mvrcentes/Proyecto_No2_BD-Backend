import Joi from 'joi'

const EntityScheme = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    website: Joi.string().required(),
    email: Joi.string().required(),
    type: Joi.string().required(),
})

export default EntityScheme