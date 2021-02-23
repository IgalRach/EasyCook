const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
//AccountName: , need to take it from the account that connected
commentbody: String
})

module.exports= mongoose.model('Comment', Comment);