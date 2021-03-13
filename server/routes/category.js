const express = require('express');
const recipeController = require('../controllers/recipe')

var router = express.Router();

router.get('/:categoryname',recipeController.getRecipesByCategory);


module.exports = router;