const express = require('express');
const mongoose = require('mongoose');
const recipeController = require('../controllers/recipe')

var router = express.Router();
const connectionString = 'mongodb://127.0.0.1:27017/EasyCook'

mongoose.connect(connectionString);


router.get('/',recipeController.get);

router.get('/:recipeTitle', recipeController.getByTitle);

router.post('/',recipeController.create);

router.put('/', recipeController.update);

router.delete('/', recipeController.remove);


module.exports = router;