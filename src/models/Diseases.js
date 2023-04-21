import Joi from "joi";

const DiseasesScheme = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
});

export default DiseasesScheme