// const { Router } = require('express')
import { Router } from 'express'

const router = Router()

// const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersEmployee.controller')
import userEmployeeController from '../controllers/usersEmployee.controller.js'
const { getUsers, createUser, getUser, updateUser, deleteUser } = userEmployeeController

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

// module.exports = router
export default router