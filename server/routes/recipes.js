const express = require('express');

const recipeController = require('../controllers/recipe');

var router = express.Router();

const Recipe = require('../models/recipe');

router.get('/', recipeController.getRecipes);

router.get('/:title', (req, res) => {
    Recipe.findOne({
        'title': {
            $regex: `.*${req.params.recipename}.*`
        }
    }).then(recipe => {
        res.json(recipe);
    })
});
//router.get('/:id', recipeController.getRecipeById);

router.post('/', recipeController.createRecipe);

router.put('/', recipeController.updateRecipe);

router.delete('/:id', recipeController.deleteRecipe);


module.exports = router;