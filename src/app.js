// require('./database')
import './database.js'

// const cors = require('cors')
import cors from 'cors'
// const express = require('express')
import express from 'express'

import routeUserEmployee from './routes/usersEmployee.routes.js'

import routeUserPatient from './routes/usersPatient.routes.js'
import routeIncidence from './routes/incidence.routes.js'
import routeTreatments from './routes/treatments.routes.js'

import routeEntity from './routes/entities.routes.js'

import routeReport from './routes/adminReports.routes.js'

import routeAuth from './routes/auth.routes.js'


const app = express()

//settings
// app.set('port', process.env.PORT || 4000)

//middlewares
//funciones que se ejecutan antes de llegar a las rutas
app.use(cors())
app.use(express.json())


//routes

app.use('/api/signup', routeAuth)

app.use('/api/usersEmployee', routeUserEmployee)

app.use('/api/Patients', routeUserPatient)
app.use('/api/incidences', routeIncidence)
app.use('/api/treatments', routeTreatments)

app.use('/api/entities', routeEntity)

app.use('/api/reports', routeReport)





// module.exports = app
export default app
