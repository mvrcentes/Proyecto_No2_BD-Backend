import supabase from '../database.js'

const invReports = {}

invReports.Report0 = async (req, res) => {
    const { data, error } = await supabase
    .from('bodega_joined').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

invReports.Report1 = async (req, res) => {
    const { data, error } = await supabase
    .from('bodega_expiring').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

invReports.Report2 = async (req, res) => {
    const { data, error } = await supabase
    .from('bodega_empty').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

export default invReports
