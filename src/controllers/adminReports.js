import supabase from '../database.js'

const adminReports = {}

adminReports.Report1 = async (req, res) => {
    const { data, error } = await supabase
    .from('reporte_1').select()
    
    if(error) return res.json({error: error.message})
    
    return res.json(data)
}

export default adminReports