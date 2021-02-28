// const express = require('express');

// const recipeController = require('../controllers/recipe')

// var router = express.Router();



// router.get('/',recipeController.get);

// router.get('/:recipeTitle', recipeController.getByTitle);

// router.post('/',recipeController.create);

// router.put('/', recipeController.update);

// router.delete('/', recipeController.remove);


// module.exports = router;

const express = require('express');
var router = express.Router();
const authenticate = require('../controllers/authenticate');
 
const Recipe= require('../controllers/recipe');

router.post('/create', Recipe.create);

router.get('/', Recipe.get);

 
module.exports = router;