// const { Router } = require('express')
import { Router } from 'express'

const router = Router()

// const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersEmployee.controller')
import userEmployeeUserController from '../controllers/usersEmployeeUser.controller.js'
const { createUser } = userEmployeeUserController

router.route('/')
    .post(createUser)

// module.exports = router
export default router