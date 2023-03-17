const express = require('express')
const config = require('./config')
const routes = require('./routes')
const hbs = require('hbs')

const app = express()

hbs.registerPartials(__dirname + '/views/partials', (err) => {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(express.json())
app.use('/', routes)
app.set('port', config.server.port)

module.exports = app

// https://github.com/cornegramm/CRUDNodejsMySql/blob/main/src/app.js
