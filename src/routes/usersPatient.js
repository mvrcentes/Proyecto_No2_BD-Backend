// const { Router } = require('express')
import { Router } from 'express'

const router = Router()

// const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/UserPatient.controller')
import userPatientController from '../controllers/UserPatient.controller.js'
const { getUsers, createUser, getUser, updateUser, deleteUser } = userPatientController

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

// module.exports = router
export default router