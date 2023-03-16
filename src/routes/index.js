const express = require('express');
// const users = require('../api/users/routes');
// const issues = require('../api/issues/routes');
// const notebooks = require('../api/notebooks/routes');
// const addresses = require('../api/addresses/routes');
// const addressTypes = require('../api/addressTypes/routes');

const router = express.Router();

router.use('/', (request, response) => {
  console.log('Probando...')
  response.send("hola que tal")
})
// router.use('/users', users);
// router.use('/notebooks', notebooks);
// router.use('/addresses', addresses);
// router.use('/addressTypes', addressTypes);
// router.use('/issues', issues);

module.exports = router;
