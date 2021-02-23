const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    username: {
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
    role: String,  //ueser or admin
    prifilePic:{type: String},
    createat: Date,
    updateAt: Date
//     recipe : [
//         {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Post"
//         }
//       ]
 });

module.exports = mongoose.model('User', User);