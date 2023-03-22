// const { createClient } = require('@supabase/supabase-js')
import { createClient } from '@supabase/supabase-js'

// const Joi = require('joi')
import Joi from 'joi'

const UserEmployeeSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    hospital_id: Joi.string().required(), 
})