import { Router } from 'express'

import treatmentController from '../controllers/treatment.controller.js'

const router = Router()

const { getTreatment, putTreatment } = treatmentController

router.route('/')
    .get(getTreatment)
    .post(putTreatment)

export default router