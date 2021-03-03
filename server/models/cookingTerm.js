const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const CookingTerm = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: { type: String},
  recipePic: { type: String},
  firstLetter: { type: String},
});

module.exports = mongoose.model("CookingTerm", CookingTerm);