import supabase from '../database.js'

const userEmployeeController = {}

userEmployeeController.getUsers = async (req, res) => {
    const { data, error } = await supabase
    .from('medico')
    .select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

userEmployeeController.createUser = (req, res) => res.send('User created')

userEmployeeController.getUser = (req, res) => res.send('User')

userEmployeeController.updateUser = (req, res) => res.send('User updated')

userEmployeeController.deleteUser = (req, res) => res.send('User deleted')

// module.exports = userEmployeeController

export default userEmployeeController