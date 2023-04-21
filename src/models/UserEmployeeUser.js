// const { createClient } = require('@supabase/supabase-js')
import { createClient } from '@supabase/supabase-js'

// const Joi = require('joi')
import Joi from 'joi'

const UserEmployeeUserSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    rol_id: Joi.number().integer().required(),
    num_colegiado: Joi.number().integer().required(),
})

export default UserEmployeeUserSchema