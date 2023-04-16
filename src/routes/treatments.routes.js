import { Router } from 'express'

import treatments from '../controllers/treatments.controller.js'
const { getTreatments, getTreatmentByID } = treatments

const router = Router()

router.route('/:id')
    .get(getTreatments)

router.route('/incidence/:id/treatment/:treatment_id')
    .get(getTreatmentByID)    

export default router