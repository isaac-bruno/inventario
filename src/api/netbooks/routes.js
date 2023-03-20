const express = require('express')
// const controller = require('./controller')
const router = express.Router()

router.get('/', (request, response) => {
  response.send("hola mundo")
})

module.exports = router
