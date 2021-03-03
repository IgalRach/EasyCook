const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Category = new mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
    uppercase: true,
  },
  description:{
    type: String,
  } 
});

module.exports = mongoose.model('Category', Category);