import supabase from "../database.js";

import EntityScheme from "../models/Entity.js";

const entitiesController = {};

//Queries generales
entitiesController.getEntities = async (req, res) => {
    const { data, error } = await supabase.from("institucion").select();

    if (error) return res.json({ error: error.message });

    return res.json(data);
};

entitiesController.createEntity = async (req, res) => {
    const { name, address, phone, email, website, type } = req.body;

    //Validacion de datos
    const { error, value } = EntityScheme.validate({
        name,
        address,
        phone,
        email,
        website,
        type
    });
    
    if (error) {
        console.log(error.message);    
        return res.json({ error: error.message });
    }

    const { data, errorSupabse } = await supabase
        .from("institucion")
        .insert({
            nombre: name,
            direccion: address,
            telefono: phone,
            mail: email,
            website: website,
            tipo: type
        })
        .select();

    console.log(errorSupabse);
    console.log(data);
    res.json({ message: "Entidad creada" });
};

entitiesController.getEntity = async (req, res) => {
    const { data, error } = await supabase
        .from("hospitales")
        .select()
        .eq("id", req.params.id);

    res.json(data);
};

entitiesController.updateEntity = async (req, res) => {
    const { name, address, phone, email, website } = req.body;

    //Validacion de datos
    const { error, value } = EntityScheme.validate({
        name,
        address,
        phone,
        email,
        website,
    });

    if (error) return res.json({ error: error.message });

    const { data, errorSupabse } = await supabase
        .from("hospitales")
        .update({
            nombre: name,
            direccion: address,
            telefono: phone,
            mail: email,
            website: website,
        })
        .eq("id", req.params.id)
        .select();

    res.json({
        message: "Hospital actualizado",
        data: data,
        error: errorSupabse,
    });
};

entitiesController.deleteEntity = (req, res) =>
    res.json({ message: "Hospital eliminado" });

//-----------------Queries para obtener los hospitales, clinicas y laboratorios-----------------//

// Funcion generadora
const getEntidad = async (tipo) => async (req, res) => {
    const { data, error } = await supabase
        .from("hospitales")
        .select()
        .eq("tipo", tipo);

    if (error) return res.json({ error: error.message });

    return res.json(data);
};

//Query para obtener los hospitales
entitiesController.getHospitales = getEntidad("hospitales");

//Query para obtener las clinicas
entitiesController.getClinicas = getEntidad("clinica");

//Query para obtener los laboratorios
entitiesController.getLaboratorios = getEntidad("laboratorio");

//Query para obtener los centros de salud
entitiesController.getCentrosSalud = getEntidad("centro_salud");

// module.exports = entitiesController
export default entitiesController;
