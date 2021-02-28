const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

var router = express.Router();


const Admin = require('../controllers/admin');

router.get('/', Admin.get);
   
router.post('/signup', Admin.create);

router.post('/login', Admin.getByUsername);

module.exports = router;