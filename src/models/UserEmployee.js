// const { createClient } = require('@supabase/supabase-js')
import { createClient } from '@supabase/supabase-js'

// const Joi = require('joi')
import Joi from 'joi'

const UserEmployeeSchema = Joi.object({
    colegiate_number: Joi.number().integer().required(),
    entity: Joi.number().integer().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    speciality: Joi.string().required(),
})

export default UserEmployeeSchema