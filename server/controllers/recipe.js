// const { ObjectId } = require('mongodb');
// const Recipe = require('../models/recipe');

// const create = (req,res)=>{
//     const recipe = new Recipe({ 
//         recipeId:ObjectId,
//         recipeTitle: req.body.recipeTitle,
//         ingredients: req.body.ingredients,
//         recipeProcess: req.body.recipeProcess,
//        // type: req.body.type,
//         //recipePicture:req.boby.recipePicture
//     });

//     recipe.save().then(() => {
//         res.redirect('/recipes');
//     }).catch(error => {
//         res.send('failed');
//     });
// }

// const get = (req,res)=>{
//     Recipe.find().then(results => {
//         res.json(results);
//     });
// }

// const getByTitle = (req,res)=>{
//     Recipe.findOne({
//         'title': { $regex: `.*${req.params.recipeTitle}.*` }
//     }).then(recipe => {
//         res.json(recipe);
//     });
// }

// const update =(req,res)=>{
//     res.send('Put entry point');
// }

// const remove = (req,res)=>{
//     res.send('Delete entry point');
// }
// module.exports ={create,get,getByTitle,update,remove}

const Recipe = require('../models/recipe');
const mongoose = require('mongoose');

 const create = (req,res)=>{
        const recipe = new Recipe({ 
            id: new mongoose.Types.ObjectId(),
            recipename: req.body.recipename,
            description: req.body.description,
            recipePic: req.body.recipePic,
            keyword: req.body.keyword,
            category: req.body.category,
            createdBy: req.body.createdBy
  });

  recipe.save()
  .then(recipe => {
      res.status(201).json({
          message: recipe
      });
  })
  .catch(er => {
      res.status(500).json({
          error: er
      });
  })

}

 const get = (req,res)=>{
    Recipe.find({})
    .select('id name review recipePic ')
    .exec()
    .then(recipes => {
        res.status(200).json({
            message: recipes
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    })

}

module.exports={create,get}