const express = require('express');

const recipeController = require('../controllers/recipe');

var router = express.Router();



router.get('/',recipeController.getRecipes);

router.get('/title/:recipename', recipeController.getRecipeByTitle);
router.get('/:id', recipeController.getRecipeById);

router.post('/',recipeController.createRecipe);

router.put('/', recipeController.updateRecipe);

router.delete('/:id', recipeController.deleteRecipe);


module.exports = router;