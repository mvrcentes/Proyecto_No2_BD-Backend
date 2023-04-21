import supabase from "../database.js";

import TratamientoCorrecto from "../models/TratamientoCorrecto.js";

const tratamientoCorrectoController = {};

tratamientoCorrectoController.postTreatment = async (req, res) => {
    const { id_tratamiento, id_incidencia, id_examen, id_cirugia, id_medicamento, evolucion, fecha, id_resultado } = req.body;

    //Validacion de datos
    const { error, value } = TratamientoCorrecto.validate({
        id_tratamiento,
        id_incidencia,
        id_examen,
        id_cirugia,
        id_medicamento,
        evolucion,
        fecha,
        id_resultado
    });

    if (error) {
        console.log(error.message);
        return res.json({ error: error.message });
    }

    try {
        // Insert the new user into the medico table
        const { data, error } = await supabase
            .from("tratamiento")
            .insert({
                id: id_tratamiento,
                id_incidencia: id_incidencia,
                id_examen: id_examen,
                id_cirugia: id_cirugia,
                id_medicamento: id_medicamento,
                evolucion: evolucion,
                fecha: fecha,
                id_resultado: id_resultado
            });

        if (error) {
            console.error(error.message);
            return res.json({ error: error.message });
        }

        // Return a success message if the insert was successful
        console.log(data);
        res.json({ message: "Tratamiento Correcto creado" });
    } catch (error) {
        console.error(error.message);
        return res.json({ error: error.message });
    }
}

export default tratamientoCorrectoController;