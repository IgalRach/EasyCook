const express = require('express');
const mongoose = require('mongoose');
const accountController = require('../controllers/account')

var router = express.Router();
const connectionString = 'mongodb://127.0.0.1:27017/EasyCook'

mongoose.connect(connectionString);


router.get('/',accountController.get);

router.get('/:recipeTitle', accountController.getByTitle);

router.post('/',accountController.create);

router.put('/', accountController.update);

router.delete('/', accountController.remove);


module.exports = router;