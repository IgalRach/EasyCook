const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    accountId:ObjectId(),
    userName: {type: String, required: true,unique: true, maxlength: 100},
    email:{ type: String, unique: true, required: true},
    password: { type: String,  required: true}
    // profilePicture:{
    //     data:Buffer,
    //     connectType:String
    // },
})

module.exports= mongoose.model('Account', Account)