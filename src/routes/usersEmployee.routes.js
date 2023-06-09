// const { Router } = require('express')
import { Router } from 'express'

const router = Router()

// const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersEmployee.controller')
import userEmployeeController from '../controllers/usersEmployee.controller.js'
import userEmployeeUserController from '../controllers/usersEmployeeUser.controller.js'
const { getUsers, createDoctor, getUser, updateUser, deleteUser } = userEmployeeController
const { createUser } = userEmployeeUserController

router.route('/')
    .get(getUsers)
    .post(createDoctor)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

// module.exports = router
export default router