const express = require('express')
// const controller = require('./controller')
const router = express.Router()

router.get('/', (request, response) => {
  response.render('netbooks/index.hbs')
})

module.exports = router
