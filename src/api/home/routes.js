const express = require('express')
const router = express.Router()

router.get('/', (requests, response) => {
  response.render('home.hbs', {
    title: "titulo grandioso"
  })
})

module.exports = router
