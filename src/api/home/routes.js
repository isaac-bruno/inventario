const express = require('express')
const router = express.Router()

router.get('/', (requests, response) => {
  response.render('home.hbs', {
    title: "titulo grandioso",
    links: [
      {name: 'Notebooks', url: 'notebooks'},
      {name: 'Usuarios', url: 'users'},
      {name: 'Direcciones', url: 'addresses'},
      {name: 'Asuntos', url: 'issues'},
      {name: 'Tipos de direcciones', url: 'addressTypes'},
    ]
  })
})

module.exports = router
