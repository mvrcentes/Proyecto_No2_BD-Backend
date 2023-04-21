import supabase from "../database.js"

import TreatmentScheme from "../models/Treatment.js"
import IncidenceScheme from "../models/Incidence.js"

const incidenceController = {}

//Queries generales
incidenceController.getIncidences = async (req, res) => {
    const { data, error } = await supabase.from("incidencias_joined").select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

incidenceController.getIncidenceByDPI = async (req, res) => {
    const { dpi } = req.params

    const { data, error } = await supabase
        .from("incidencias_joined")
        .select()
        .eq("dpi_paciente", dpi)

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

incidenceController.getIncidenceByID = async (req, res) => {
    const { dpi, id } = req.params

    const { data, error } = await supabase
        .from("incidencias_joined")
        .select()
        .eq("dpi_paciente", dpi)
        .eq("incidencia_id", id)

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

incidenceController.postIncidence = async (req, res) => {
    const { incidencia, dpi_paciente, num_colegiado, institucion, enfermedad, diagnostico, fecha } =
        req.body

    //Validacion de datos
    const { error, value } = IncidenceScheme.validate({
        incidencia, 
        dpi_paciente, 
        num_colegiado, 
        institucion, 
        enfermedad, 
        diagnostico, 
        fecha,
    })

    if (error) {
        console.log(error.message)
        return res.json({ error: error.message })
    }

    try {
        // Insert the new user into the medico table
        const { data, error } = await supabase
            .from('incidencia')
            .insert({
                id: incidencia,
                dpi_paciente: dpi_paciente,
                num_colegiado_med: num_colegiado,
                institucion: institucion,
                id_enfermedad: enfermedad,
                diagnostico: diagnostico,
                fecha: fecha,
            });


        if (error) {
            console.error(error.message);
            return res.json({ error: error.message });
        }

        // Return a success message if the insert was successful
        console.log(data);
        res.json({ message: 'Incidencia creada' });
    } catch (error) {
        console.error(error.message);
        return res.json({ error: error.message });
    }
}

incidenceController.putTreatment = async (req, res) => {
    const {
        patient_dpi,
        doctor_colegiate_number,
        entity,
        sickness,
        exams,
        surgeries,
    } = req.body

    const { error } = TreatmentScheme.validate({
        patient_dpi,
        doctor_colegiate_number,
        entity,
        sickness,
        exams,
        surgeries,
    })

    if (error) return res.json({ error: error.message })

    const { data, error: errorInsert } = await supabase
        .from("tratamiento")
        .insert([
            {
                dpi_paciente: patient_dpi,
                num_colegiado: doctor_colegiate_number,
                institucion: entity,
                enfermedad: sickness,
                examenes: exams,
                cirugias: surgeries,
            },
        ])
}

export default incidenceController
