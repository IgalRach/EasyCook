const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    accountId:ObjectId,
    userName: String,
    email:String,
    password: String,
    // profilePicture:{
    //     data:Buffer,
    //     connectType:String
    // },
})

module.exports= mongoose.model('Account', Account)