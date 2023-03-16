const express = require('express')
const config = require('./config')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use('/', routes)
app.set('port', config.server.port)

module.exports = app

// https://github.com/cornegramm/CRUDNodejsMySql/blob/main/src/app.js
