// require('./database')
import './database.js'

// const cors = require('cors')
import cors from 'cors'
// const express = require('express')
import express from 'express'

import routeUserEmployee from './routes/usersEmployee.js'

import routeUserPatient from './routes/usersPatient.js'

import routeEntity from './routes/entities.js'

import routeAuth from './routes/auth.js'


const app = express()

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
//funciones que se ejecutan antes de llegar a las rutas
app.use(cors())
app.use(express.json())

// app.use( async (req, res, next) => {
//     const {data: { user } } = await supabase.auth.getUser(req.headers.authorization)
    
//     if (user) {
//         console.log(user);
//         next()
//     }
//     next()
// })

//routes

app.use('/api/signup', routeAuth)

app.use('/api/usersEmployee', routeUserEmployee)

app.use('/api/usersPatient', routeUserPatient)

app.use('/api/entities', routeEntity)
app.use('/api/createHospital', routeEntity)




// module.exports = app
export default app
