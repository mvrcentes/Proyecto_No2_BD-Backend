// const { createClient } = require('@supabase/supabase-js')
import { createClient } from '@supabase/supabase-js'

// const Joi = require('joi')
import Joi from 'joi'

const HospitalSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    website: Joi.string().required(),
    email: Joi.string().required(),
})

// module.exports = HospitalSchema

export default HospitalSchema