const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Comment = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    default: "",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comments",Comment);