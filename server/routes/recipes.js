const express = require('express');

const recipeController = require('../controllers/recipe')

var router = express.Router();



router.get('/',recipeController.get);

router.get('/title/:recipeTitle', recipeController.getByTitle);

router.get('/:recipeId', recipeController.getById);

router.post('/',recipeController.create);

router.put('/', recipeController.update);

router.delete('/', recipeController.remove);


module.exports = router;