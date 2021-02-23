const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeCart = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    user:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    cart:[
        {
            id:{type: mongoose.Schema.Types.ObjectId},
            recipe:{type: mongoose.Schema.Types.ObjectId, ref:'Recipe'},
            rating:Number
        }
    ],
    createAt:{type: Date, default: Date.now()},
    updateAt:{type: Date}
 
 });

module.exports = mongoose.model('RecipeCart', RecipeCart);