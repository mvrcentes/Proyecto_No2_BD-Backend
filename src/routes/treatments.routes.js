import { Router } from 'express'

import treatments from '../controllers/treatments.controller.js'
import tratamiento_correcto from '../controllers/tratamientoCorrecto.controller.js'
const { getTreatments, getTreatmentByID } = treatments
const { postTreatment } = tratamiento_correcto

const router = Router()

router.route('/:id')
    .get(getTreatments)
    .post(postTreatment)

router.route('/incidence/:id/treatment/:treatment_id')
    .get(getTreatmentByID)    

export default router