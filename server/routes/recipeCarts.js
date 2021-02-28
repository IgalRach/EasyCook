const express = require('express')
var router = express.Router();

const RecipeCart = require('../controllers/recipeCart');


router.post('/add', RecipeCart.create); 

router.post('/user/:userId', RecipeCart.get);

module.exports = router;