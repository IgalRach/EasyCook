const express = require('express');
const recipeController = require('../controllers/recipe')

var router = express.Router();

router.get('/',recipeController.getRecipesByCategory);


module.exports = router;