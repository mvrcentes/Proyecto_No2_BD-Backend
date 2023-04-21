import { Router } from 'express'

import invReports from "../controllers/inventoryReports.js"
const { Report0, Report1, Report2 } = invReports

const router = Router()

router.route('/0')
    .get(Report0)

router.route('/1')
    .get(Report1)

router.route('/2')
    .get(Report2)

export default router