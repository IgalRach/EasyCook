const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Rating = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  recipeRating: {
    type: Number,
    required: true,
  },
});


module.exports = mongoose.model('Rating', Rating);




