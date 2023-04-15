import { Router } from 'express'

import adminReports from "../controllers/adminReports.js"
const { Report1 } = adminReports

const router = Router()

router.route('/')
    .get(Report1)



export default  router