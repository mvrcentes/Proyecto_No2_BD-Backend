import Joi from 'joi'

const TreatmentScheme = Joi.object({
    patient_dpi: Joi.string().required(),
    doctor_colegiate_number: Joi.string().required(),
    entity: Joi.string().required(),
    sickness: Joi.string().required(),
    exams: Joi.string().required(),
    surgeries: Joi.string().required(),
})

export default TreatmentScheme