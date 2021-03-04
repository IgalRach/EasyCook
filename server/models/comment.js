// const { ObjectId } = require('mongodb');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const Comment = new Schema({
// //AccountName: , need to take it from the account that connected
// commentbody: String
// })

// module.exports= mongoose.model('Comment', Comment);
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