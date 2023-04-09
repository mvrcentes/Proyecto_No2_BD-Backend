import supabase from "../database.js"

import TreatmentScheme from "../models/Treatment.js"

const treatmentController = {}

//Queries generales
treatmentController.getTreatment = async (req, res) => {
    const { data, error } = await supabase.from("tratamiento").select()

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

treatmentController.putTreatment = async (req, res) => {
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

export default treatmentController
