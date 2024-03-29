const express = require('express');

const recipeController = require('../controllers/recipe');

var router = express.Router();



router.get('/',recipeController.getRecipes);

router.get('/recipe/:recipename', recipeController.getRecipeByTitle);
router.get('/:id', recipeController.getRecipeById);
router.get('/category/:category', recipeController.getRecipesByCategory);

router.post('/',recipeController.createRecipe);

router.patch('/:id', recipeController.updateRecipe);

router.delete('/:id', recipeController.deleteRecipe);


module.exports = router;