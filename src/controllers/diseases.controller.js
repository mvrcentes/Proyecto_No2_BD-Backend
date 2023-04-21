import supabase from "../database.js";

import DiseasesScheme from "../models/Diseases.js";

const diseasesController = {};

//Queries generales
diseasesController.getDiseases = async (req, res) => {
    const { data, error } = await supabase.from("enfermedad").select();

    if (error) return res.json({ error: error.message });

    return res.json(data);
}

export default diseasesController