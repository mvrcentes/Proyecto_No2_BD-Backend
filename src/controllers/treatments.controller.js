import supabase from "../database.js"

const treatments = {}

treatments.getTreatments = async (req, res) => {
    const { id } = req.params

    const { data, error } = await supabase
        .from("tratamientos_joined")
        .select()
        .eq('id_incidencia', id)

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

treatments.getTreatmentByID = async (req, res) => {
    const { id } = req.params
    
    const { data, error } = await supabase
        .from("tratamientos_joined")
        .select()
        .eq("id_incidencia", id)

    if (error) return res.json({ error: error.message })

    return res.json(data)
}

export default treatments
