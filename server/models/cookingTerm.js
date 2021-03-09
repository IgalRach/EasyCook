const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const CookingTerm = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  description: { type: String},
});

module.exports = mongoose.model("CookingTerm", CookingTerm)