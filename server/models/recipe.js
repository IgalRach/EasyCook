const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Recipe = new mongoose.Schema({
  recipename: {
    type: String,
    required: true,
    unique:true,
  },
  description:{
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    requred: true,
    ref:"Category"
  },
  recipePic:{img: String},
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  rating: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
});

module.exports = mongoose.model('Recipe', Recipe);

