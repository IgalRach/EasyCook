const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Recipe = new mongoose.Schema({
  recipename: {
    type: String,
    required: true,
    uppercase: true,
  },
  description:{
    type: String,
  },
  category: {
    type: String,
    requred: true
  },
  recipePic:[{img: String}],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  rating: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
});

module.exports = mongoose.model('Recipe', Recipe);