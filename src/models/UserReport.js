// const Joi = require('joi')
import Joi from 'joi'

const UserReport = Joi.object({
    doctorName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    note: Joi.string().required(), 
})