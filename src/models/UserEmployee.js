const { createClient } = require('@supabase/supabase-js')
const Joi = require('joi')

const UserEmployeeSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    hospital_id: Joi.string().required(),
    
})