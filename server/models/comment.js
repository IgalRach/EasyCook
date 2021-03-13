const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Comment = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  recipe:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Recipe"
  }
});

module.exports = mongoose.model("Comments",Comment);