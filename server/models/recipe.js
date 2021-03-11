const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Recipe = new mongoose.Schema({
  recipename: {
    type: String,
    required: true,
    unique:true,
  },
  ingredients:{
    type: String
  },

  description:{
    type: String,
  },
  category: {
    type:String,
  },
  propTime:{
    type:String,
  },
  recipePic:{type: String},
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
});

module.exports = mongoose.model('Recipe', Recipe);

