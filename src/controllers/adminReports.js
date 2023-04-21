import supabase from '../database.js'

const adminReports = {}

adminReports.Report1 = async (req, res) => {
    const { data, error } = await supabase
    .from('reporte_1').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

adminReports.Report2 = async (req, res) => {
    const { data, error } = await supabase
    .from('reporte_2').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

adminReports.Report3 = async (req, res) => {
    const { data, error } = await supabase
    .from('reporte_3').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

// adminReports.Report4 = async (req, res) => {
//     const id_inst = 2
//     const { id } = req.params

//     console.log(id)

//     const { data, error } = await supabase.rpc('reporte_4', {"id_inst": id}) 
    
//     if(error) return res.json({error: error.message})
    
//     return res.json(data)
// }

adminReports.Report4 = async (req, res) => {
    const { data, error } = await supabase
    .from('reporte_4').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

adminReports.Report5 = async (req, res) => {
    const { data, error } = await supabase
    .from('reporte_5').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

export default adminReports
