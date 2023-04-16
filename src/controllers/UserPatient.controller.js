import supabase from '../database.js'

const userPatientController = {}

userPatientController.getUsers = async (req, res) => {
    const { data, error } = await supabase
    .from('paciente')
    .select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

userPatientController.createUser = (req, res) => res.send('User created')


//-------
userPatientController.getUser = async (req, res) => {
    const { dpi } = req.params

    

    const { data, error } = await supabase
    .from('paciente')
    .select().eq("dpi", dpi)
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

userPatientController.updateUser = (req, res) => res.send('User updated')

userPatientController.deleteUser = (req, res) => res.send('User deleted')

// module.exports = userPatientController

export default userPatientController