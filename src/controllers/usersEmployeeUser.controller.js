import supabase from "../database.js"

import UserEmployeeUser from "../models/UserEmployeeUser.js"


const userEmployeeUserController = {}

userEmployeeUserController.createUser = async (req, res) => {
    const { username, password, rol_id, num_colegiado } =
        req.body

    //Validacion de datos
    const { error, value } = UserEmployeeUser.validate({
        username,
        password,
        rol_id,
        num_colegiado,
    })

    if (error) {
        console.log(error.message)
        return res.json({ error: error.message })
    }

    try {
        // Insert the new user into the medico table
        const { data, error } = await supabase
            .from('users')
            .insert({
                username: username,
                password: password,
                rol_id: rol_id,
                num_colegiado: num_colegiado,
            });

        if (error) {
            console.error(error.message);
            return res.json({ error: error.message });
        }

        // Return a success message if the insert was successful
        console.log(data);
        res.json({ message: 'User creado' });
    } catch (error) {
        console.error(error.message);
        return res.json({ error: error.message });
    }
}

export default userEmployeeUserController