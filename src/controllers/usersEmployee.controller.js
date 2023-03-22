// const  supabase   = require('../database.js')
import supabase from '../database.js'

const userEmployeeController = {}

userEmployeeController.getUsers = (req, res) => {
    
    res.json({message: []})
}

userEmployeeController.createUser = (req, res) => res.send('User created')

userEmployeeController.getUser = (req, res) => res.send('User')

userEmployeeController.updateUser = (req, res) => res.send('User updated')

userEmployeeController.deleteUser = (req, res) => res.send('User deleted')

// module.exports = userEmployeeController

export default userEmployeeController