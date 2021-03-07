const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Category = new mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
    unique:true,
  },
  recipes:[{type: mongoose.Schema.Types.ObjectId,ref:"Recipe"}]
});

module.exports = mongoose.model('Category', Category);