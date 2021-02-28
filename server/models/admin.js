const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    userName: {
        type: String,
        required:true
    },
    email:{
        type: String,
        requred: true,
        unique: true,
        match:  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    
    password:{
        type: String,
        requred: true
    },
    createat: Date,

});

module.exports = mongoose.model('Admin', Admin);