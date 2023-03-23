// require('./database')
import './database.js'

// const cors = require('cors')
import cors from 'cors'
// const express = require('express')
import express from 'express'

import routeUserEmployee from './routes/usersEmployee.js'
import routeUserPatient from './routes/usersPatient.js'
import routeHospital from './routes/hospitals.js'

const app = express()

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
//funciones que se ejecutan antes de llegar a las rutas
app.use(cors())
app.use(express.json())

//routes
// app.use('/api/usersEmployee', require('./routes/usersEmployee'))
// app.use('/api/usersPatient', require('./routes/usersPatient'))
// app.use('/api/hospitales', require('./routes/hospitals'))

app.use('/api/usersEmployee', routeUserEmployee)
app.use('/api/usersPatient', routeUserPatient)
app.use('/api/hospitales', routeHospital)
app.use('/api/createHospital', routeHospital)



// module.exports = app
export default app
