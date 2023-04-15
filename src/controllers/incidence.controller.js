import supabase from "../database.js"

import TreatmentScheme from "../models/Treatment.js"

const incidenceController = {}

//Queries generales
incidenceController.getTreatment = async (req, res) => {
    const { data, error } = await supabase.from("").select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

incidenceController.getIncidenceJoined = async (req, res) => {
    const { data, error } = await supabase.from("incidencias_joined").select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
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
