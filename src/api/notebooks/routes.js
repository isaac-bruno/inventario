const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/', (requests, response) => {
  console.log("hola amigo mio")
})

module.exports = router
