const { createClient } = require('@supabase/supabase-js')
const Joi = require('joi')

const HospitalSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    website: Joi.string().required(),
})

module.exports = HospitalSchema