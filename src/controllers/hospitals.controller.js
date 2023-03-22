// const supabase = require('../database.js')
import supabase from '../database.js'

// const HospitalSchema = require('../models/Hospital')
import HospitalSchema from '../models/Hospital.js'

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

hospitalsController.getHospital = async (req, res) => {
    const { data, error } = await supabase.from('hospitales').select().eq('id', req.params.id)
    
    res.json(data)
}

hospitalsController.updateHospital = async (req, res) => {
    const { name, address, phone, email, website } = req.body
    
    //Validacion de datos
    const { error, value } = HospitalSchema.validate({ name, address, phone, email, website })
    
    if(error) return res.json({error: error.message})
    
    
    const { data, errorSupabse } = await supabase
    .from('hospitales')
    .update({ nombre: name, direccion: address, telefono: phone, mail: email, website: website })
    .eq('id', req.params.id)
    .select()
    
    res.json({message: "Hospital actualizado", data: data, error: errorSupabse})
}

hospitalsController.deleteHospital = (req, res) => res.json({message: "Hospital eliminado"})

//-----------------Queries para obtener los hospitales, clinicas y laboratorios-----------------//

// Funcion generadora
const getEntidad = async (tipo) => async (req, res) => {
    const { data, error } = await supabase
    .from('hospitales')
    .select()
    .eq('tipo', tipo)
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

//Query para obtener los hospitales
hospitalsController.getHospitales = getEntidad("hospitales")

//Query para obtener las clinicas
hospitalsController.getClinicas = getEntidad("clinica")

//Query para obtener los laboratorios
hospitalsController.getLaboratorios = getEntidad("laboratorio")

//Query para obtener los centros de salud
hospitalsController.getCentrosSalud = getEntidad("centro_salud")



// module.exports = hospitalsController
export default hospitalsController