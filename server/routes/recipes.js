const express = require('express');

const recipeController = require('../controllers/recipe');

var router = express.Router();



router.get('/',recipeController.getRecipes);

router.get('/recipe/:recipename', recipeController.getRecipeByTitle);
router.get('/:id', recipeController.getRecipeById);

router.post('/',recipeController.createRecipe);

router.put('/:id', recipeController.updateRecipe);

router.delete('/:id', recipeController.deleteRecipe);


module.exports = router;