const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe = new Schema({
    recipeTitle: String,
    ingredients: String,
    recipeProcess:String,
    type: String
})

module.exports= mongoose.model('Recipe', Recipe)