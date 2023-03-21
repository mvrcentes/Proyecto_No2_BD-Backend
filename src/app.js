require('./database')
const cors = require('cors')
const express = require('express')

const app = express()

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
//funciones que se ejecutan antes de llegar a las rutas
app.use(cors())
app.use(express.json())

//routes
app.get('/users', (req, res) => res.send("Users Routes"))



module.exports = app
