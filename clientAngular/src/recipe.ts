// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

export interface Recipe{
//recipeId: mongoose.Schema.Types.ObjectId,
    recipename: String,
    description:String,
    category:String,
//    recipePic:[
//        {
//        img: String
//        }
//     ],
    // reviews:[
    //     {
    //         id: mongoose.Schema.Types.ObjectId,
    //         userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    //         review: String,
    //         createAt: Date
    //     }
    // ],
 //   keyword:{type: String},
}