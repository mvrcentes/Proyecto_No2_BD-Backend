const  supabase   = require('../database.js')

const HospitalSchema = require('../models/Hospital')

const hospitalsController = {}

//Queries generales 
hospitalsController.getHospitals = async (req, res) => {
    const { data, error } = await supabase
    .from('hospitales')
    .select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

hospitalsController.createHospital = async (req, res) => {
    const { name, address, phone, email, website } = req.body
    
    //Validacion de datos
    const { error, value } = HospitalSchema.validate({ name, address, phone, email, website })
    
    if(error) return res.json({error: error.message})
    
    
    const { data, errorSupabse } = await supabase
    .from('hospitales')
    .insert({ nombre: name, direccion: address, telefono: phone, mail: email, website:website })
    .select()
    
    
    console.log(errorSupabse)
    console.log(data)
    res.json({message: "hospital creado"})
}

hospitalsController.getHospital = (req, res) => res.json({Hospital: "Hospital"})

hospitalsController.updateHospital = (req, res) => res.json({message: "Hospital actualizado"})

hospitalsController.deleteHospital = (req, res) => res.json({message: "Hospital eliminado"})

//Query para obtener los hospitales
hospitalsController.getHospitales = async (req, res) => {
    const { data, error } = await supabase
    .from('hospitales')
    .select()
    .eq('tipo', 'hospital')
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

//Query para obtener las clinicas
hospitalsController.getClinicas = async (req, res) => {
    const { data, error } = await supabase
    .from('hospitales')
    .select()
    .eq('tipo', 'clinica')

    if(error) return res.json({error: error.message})

    return res.json(data)
}

//Query para obtener los laboratorios
hospitalsController.getLaboratorios = async (req, res) => {
    const { data, error } = await supabase
    .from('hospitales')
    .select()
    .eq('tipo', 'laboratorio')

    if(error) return res.json({error: error.message})

    return res.json(data)
}


//Query para obtener los centros de salud
hospitalsController.getCentrosSalud = async (req, res) => {
    const { data, error } = await supabase
    .from('hospitales')
    .select()
    .eq('tipo', 'centro de salud')

    if(error) return res.json({error: error.message})

    return res.json(data)
}

module.exports = hospitalsController