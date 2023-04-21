import { Router } from 'express'

import adminReports from "../controllers/adminReports.js"
const { Report1, Report2, Report3, Report4, Report5 } = adminReports

const router = Router()

router.route('/1')
    .get(Report1)

router.route('/2')
    .get(Report2)

router.route('/3')
    .get(Report3)

router.route('/4')
    .get(Report4)

router.route('/5')
    .get(Report5)

export default router