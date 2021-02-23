// const { ObjectId } = require('mongodb');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const Recipe = new Schema({
//     recipeId:ObjectId,
//     recipeTitle: String,
//     ingredients: String,
//     recipeProcess:String,
//     type: String
// })

// module.exports= mongoose.model('Recipe', Recipe)

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
    category:{type: mongoose.Schema.Types.ObjectId, ref:'Category',required:ture},
    createAt:{type: Date, default: Date.now},
    createBy:{type: mongoose.Schema.Types.ObjectId, ref:'Admin'},
    updateAt: Date,
    updateBy: {type:mongoose.Schema.Types.ObjectId, ref:'Admin'}
   
});


    // content: String,
    // published: {
    //     type: Date,
    //     default: Date.now
    // },
    // comments: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    // ]


module.exports = mongoose.model('Recipe', Recipe);