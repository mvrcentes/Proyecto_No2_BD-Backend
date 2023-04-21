import Joi from "joi";

const IncidenceScheme = Joi.object({
    incidencia: Joi.number().integer().required(),
    dpi_paciente: Joi.string().required(),
    num_colegiado: Joi.number().integer().required(),
    institucion: Joi.number().integer().required(),
    enfermedad: Joi.number().integer().required(),
    diagnostico: Joi.string().required(),
    fecha: Joi.string().required(),
})

export default IncidenceScheme