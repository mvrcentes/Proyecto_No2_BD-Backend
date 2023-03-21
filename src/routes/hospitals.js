const { Router } = require('express')
const router = Router()

const { getHospitals, createHospital, getHospital, updateHospital, deleteHospital } = require('../controllers/hospitals.controller')

router.route('/')
    .get(getHospitals)
    .post(createHospital)

router.route('/:id')
    .get(getHospital)
    .put(updateHospital)
    .delete(deleteHospital)    

module.exports = router