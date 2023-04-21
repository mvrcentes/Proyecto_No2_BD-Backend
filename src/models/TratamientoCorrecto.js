import Joi from "joi";

const TreatmentScheme = Joi.object({
    id_tratamiento: Joi.number().integer().required(),
    id_incidencia: Joi.number().integer().required(),
    id_examen: Joi.number().integer().required(),
    id_cirugia: Joi.number().integer().required(),
    id_medicamento: Joi.number().integer().required(),
    evolucion: Joi.string().required(),
    fecha: Joi.string().required(),
    id_resultado: Joi.number().integer().required()
});

export default TreatmentScheme;