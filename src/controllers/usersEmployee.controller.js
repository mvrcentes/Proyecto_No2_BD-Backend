import supabase from '../database.js'

import UserEmployee from '../models/UserEmployee.js'

const userEmployeeController = {}

userEmployeeController.getUsers = async (req, res) => {
    const { data, error } = await supabase
    .from('medico')
    .select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

userEmployeeController.createUser = async (req, res) => {
    const { colegiate_number,  entity, name, phone, address, speciality} = req.body;

    //Validacion de datos
    const { error, value } = UserEmployee.validate({
        colegiate_number,
        entity,
        name,
        phone,
        address,
        speciality
    });
    
    if (error) {
        console.log(error.message);    
        return res.json({ error: error.message });
    }

    const { data, errorSupabse } = await supabase
        .from("medico")
        .insert({
            num_colegiado: colegiate_number,
            institucion: entity,
            nombre: name,
            telefono: phone,
            direccion: address,
            especialidad: speciality
        })
        .select();

    console.log(errorSupabse);
    console.log(data);
    res.json({ message: "Medico creado" });
}

userEmployeeController.getUser = (req, res) => res.send('User')

userEmployeeController.updateUser = (req, res) => res.send('User updated')

userEmployeeController.deleteUser = (req, res) => res.send('User deleted')

// module.exports = userEmployeeController

export default userEmployeeController