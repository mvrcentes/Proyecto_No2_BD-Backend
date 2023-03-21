const hospitalsController = {}

hospitalsController.getHospitals = (req, res) => res.json({message: []})

hospitalsController.createHospital = (req, res) => res.json({message: "Hospital creado"})

hospitalsController.getHospital = (req, res) => res.json({Hospital: "Hospital"})

hospitalsController.updateHospital = (req, res) => res.json({message: "Hospital actualizado"})

hospitalsController.deleteHospital = (req, res) => res.json({message: "Hospital eliminado"})

module.exports = hospitalsController