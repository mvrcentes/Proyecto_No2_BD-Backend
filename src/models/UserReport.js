// const Joi = require('joi')
import Joi from 'joi'

const UserReport = Joi.object({
    doctorName: Joi.string().required(),
    patientCUI: Joi.string().required(),
    doctorEmail: Joi.string().required(),
    doctorPhone: Joi.string().required(),
    note: Joi.string().required(), 
})