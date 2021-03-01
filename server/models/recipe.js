const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe = new Schema({
   // recipeId:ObjectId,
    recipeTitle: String,
    ingredients: String,
    recipeProcess:String,
   // recipeImg : String
})

module.exports= mongoose.model('Recipe', Recipe)