// const { Router } = require('express')
import { Router } from 'express'

const router = Router()

// const { getHospitals, createHospital, getHospital, updateHospital, deleteHospital } = require('../controllers/hospitals.controller')
import hospitalsController from '../controllers/hospitals.controller.js'
const { getHospitals, createHospital, getHospital, updateHospital, deleteHospital } = hospitalsController

router.route('/')
    .get(getHospitals)
    .post(createHospital)

router.route('/:id')
    .get(getHospital)
    .put(updateHospital)
    .delete(deleteHospital)    

// module.exports = router
export default router