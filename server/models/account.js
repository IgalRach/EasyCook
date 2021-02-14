const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({

    userName: String,
    email:String,
    password: String,
    profilePicture:String,// need to check
})

module.exports= mongoose.model('Account', Account)