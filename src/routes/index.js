const express = require('express');
// const users = require('../api/users/routes');
// const issues = require('../api/issues/routes');
const netbooks = require('../api/netbooks/routes');
const home = require('../api/home/routes');
// const addresses = require('../api/addresses/routes');
// const addressTypes = require('../api/addressTypes/routes');

const router = express.Router();

router.use('/home', home)
// router.use('/users', users);
router.use('/netbooks', netbooks);
// router.use('/addresses', addresses);
// router.use('/addressTypes', addressTypes);
// router.use('/issues', issues);
router.use('/', (request, response) => {
  response.redirect('/home')
})

module.exports = router;
