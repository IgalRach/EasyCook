const express = require('express');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');


var router = express.Router();

const User = require('../controllers/user');

router.post('/signup', User.create);

router.get('/login', User.get);


module.exports = router;