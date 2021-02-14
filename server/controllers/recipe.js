const Recipe = require('../models/recipe');

const create = (req,res)=>{
    const recipe = new Recipe({ 
        recipeTitle: req.body.recipeTitle,
        ingredients: req.body.ingredients,
        recipeProcess: req.body.recipeProcess,
        type: req.body.type,
        recipePicture:req.boby.recipePicture
    });

    recipe.save().then(() => {
        res.redirect('/recipe');
    }).catch(error => {
        res.send('failed');
    });
}

const get = (req,res)=>{
    Recipe.find().then(results => {
        res.json(results);
    });
}

const getByTitle = (req,res)=>{
    Recipe.findOne({
        'title': { $regex: `.*${req.params.recipeTitle}.*` }
    }).then(recipe => {
        res.json(recipe);
    });
}

const update =(req,res)=>{
    res.send('Put entry point');
}

const remove = (req,res)=>{
    res.send('Delete entry point');
}
module.exports ={create,get,getByTitle,update,remove}