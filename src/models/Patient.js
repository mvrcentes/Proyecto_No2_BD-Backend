import Joi from 'joi'

const PatientScheme = Joi.object({
    dpi: Joi.string().required(),
    name: Joi.string().required(),
    body_mass_index: Joi.number().required(),
    height: Joi.number().required(),
    weight: Joi.number().required(),
    addictions: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    precedents: Joi.string().required(),
    state: Joi.string().required(),
})

