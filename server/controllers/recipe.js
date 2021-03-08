const RecipeService = require('../services/recipe');
const Recipe = require('../models/recipe');

const createRecipe = async (req,res)=>{
    const recipe = await RecipeService.createRecipe(req);
    res.json(recipe);
}

const getRecipes = async (req,res)=>{
    const recipe= await RecipeService.getRecipes();
    try {
        res.json(recipe);
    } catch (err) {}

    
}

<<<<<<< HEAD
// const getByTitle = (req,res)=>{
//     Recipe.findOne({
//         'title': { $regex: `.*${req.params.recipeTitle}.*` }
//     }).then(recipe => {
//         res.json(recipe);
//     });
// }

const getByTitle = (req,res)=>{
    Recipe.findOne({
        'title': req.params.recipeTitle
    }).then(recipe => {
=======
const getRecipeById= async (req,res)=>{
    console.log(req.params.id);
    const recipe= await RecipeService.getRecipeById(req.params.id); 
    try {
        res.json(recipe);
    } catch (err) {
        return res.status(404).json({errors:['recipe not found']});
    }
};


const getRecipeByTitle = async (req,res)=>{

    const recipe= await RecipeService.getRecipeByTitle(req);
    try {
>>>>>>> origin/main
        res.json(recipe);
    } catch (error) {
        
    }
}
const getCategoryRecipes = async (req,res)=>{

<<<<<<< HEAD
const getById = (req,res)=>{
    Recipe.findById(req.params.recipeId).then(recipe => {
        res.json(recipe);
    });
}

const update =(req,res)=>{
    res.send('Put entry point');
=======
    const recipes= await RecipeService.getCategoryRecipes(req);
    try {
        //res.json(recipes);
    } catch (error) {
        
   }
>>>>>>> origin/main
}

//need to be checked
const getComments= async(req,res)=>{
    // var comments = await StockService.getStockComments(req);
    // try {
    //   if(comments){
    //       comments.exec(function(err,docs){
    //         if (err) {
    //             console.error(err.stack|| err);
    //         }
    //         res.json(docs.Comments);
    //     });
    //   }
    // } catch (err) {
    //   res.status(500).send(err);
    // }
    var comments = await RecipeService.getComments(req);
    try {
      if(comments) res.send(comments);
    } catch (err) {
      res.status(500).send(err);
    }
}
<<<<<<< HEAD
module.exports ={create,get,getByTitle,getById,update,remove}
=======

const updateRecipe = async (req, res) => {
    var recipe = await RecipeService.updateRecipe(req.params.id);
    try {
      res.send(recipe);
    } catch (err) {
      res.status(500).send(err);
    }
};

const deleteRecipe = async (req,res)=>{
    const recipe = await RecipeService.deleteRecipe(req.params.id);
    res.send();
}



module.exports ={createRecipe,
    getRecipes,
    getRecipeById,
    getRecipeByTitle,
    getCategoryRecipes,
    getComments,
    updateRecipe,
    deleteRecipe
};
>>>>>>> origin/main
