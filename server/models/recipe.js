const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    recipename: {
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    category: {
        type: String,
        requred: true
    },
   recipePic:[
       {
       img: String
       }
    ],
    reviews:[
        {
            id: mongoose.Schema.Types.ObjectId,
            userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
            review: String,
            createAt: Date
        }
    ],
    keyword:{type: String},
    category:{type: mongoose.Schema.Types.ObjectId, ref:'Category',required:true},
    createAt:{type: Date, default: Date.now},
    createBy:{type: mongoose.Schema.Types.ObjectId, ref:'Admin'},
    updateAt: Date,
    updateBy: {type:mongoose.Schema.Types.ObjectId, ref:'Admin'}
   
});


   

module.exports = mongoose.model('Recipe', Recipe);