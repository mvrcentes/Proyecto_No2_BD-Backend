import supabase from "../database.js"

import UserEmployee from "../models/UserEmployee.js"

const userEmployeeController = {}

userEmployeeController.getUsers = async (req, res) => {
    const { data, error } = await supabase.from("medico_joined").select()
    // .select('institucion (tipo)')

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

userEmployeeController.createUser = async (req, res) => {
    const { colegiate_number, entity, name, phone, address, speciality } =
        req.body

    //Validacion de datos
    const { error, value } = UserEmployee.validate({
        colegiate_number,
        entity,
        name,
        phone,
        address,
        speciality,
    })

    if (error) {
        console.log(error.message)
        return res.json({ error: error.message })
    }

    const { data, errorSupabse } = await supabase
        .from("medico")
        .insert({
            num_colegiado: colegiate_number,
            institucion: entity,
            nombre: name,
            telefono: phone,
            direccion: address,
            especialidad: speciality,
        })
        .select()

    console.log(errorSupabse)
    console.log(data)
    res.json({ message: "Medico creado" })
}

userEmployeeController.getUser = (req, res) => res.send("User")

userEmployeeController.updateUser = async (req, res) => {
    const { id, institucion } = req.body


    console.log(id, institucion)
    const { data, errorSupabse } = await supabase
        .from("medico")
        .update({
            institucion: institucion,
        })
        .select()
        .eq("num_colegiado", id)

    if (errorSupabse) {
        console.error(error.message)
        return res.json({ error: error.message })
    }

    console.log("data", data)
    res.json({ message: "update user" })
}

userEmployeeController.deleteUser = (req, res) => res.send("User deleted")

// module.exports = userEmployeeController

export default userEmployeeController
