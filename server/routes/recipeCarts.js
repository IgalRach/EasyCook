const express = require('express');
const mongoose=require('mongoose');
var router = express.Router();

const RecipeCart = require('../controllers/recipeCart');

router.get('/',RecipeCart.get);

router.post('/add', RecipeCart.create); 

router.put('/user/:userId', RecipeCart.update);

router.delete('/', RecipeCart.remove);

module.exports = router;