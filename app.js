const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { initMongoDB } = require('./config/db')
const { apiRoutes } = require('./routes/api.routes')

const app = express()

initMongoDB()

app.use(cors({origin: '*'}))
app.use(bodyParser.json())

app.use('/api', apiRoutes)

module.exports = app