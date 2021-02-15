const express = require('express');
//const mongoose = require('mongoose');
const recipeController = require('../controllers/recipe')

var router = express.Router();
// const connectionString = ('mongodb+srv://igalRachman:<password>@easycook.8bkru.mongodb.net/<dbname>?retryWrites=true&w=majority');

// mongoose.connect(connectionString);


router.get('/',recipeController.get);

router.get('/:recipeTitle', recipeController.getByTitle);

router.post('/',recipeController.create);

router.put('/', recipeController.update);

router.delete('/', recipeController.remove);


module.exports = router;