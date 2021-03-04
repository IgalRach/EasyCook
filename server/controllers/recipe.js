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

const getRecipeById= async (req,res)=>{
    console.log(req.params.id);
    const recipe= await RecipeService.getRecipeById(req.params.id); 
    try {
        console.log("houdhgoehgoer");

        res.json(recipe);
    } catch (err) {
        return res.status(404).json({errors:['recipe not found']});
    }
};


const getRecipeByTitle = async (req,res)=>{

    const recipe= await RecipeService.getRecipeByTitle(req);
    try {
        res.json(recipe);
    } catch (error) {
        
    }
}



const updateRecipe = async (req, res) => {
    var recipe = await TermService.updateRecipe(req);
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
    updateRecipe,
    deleteRecipe
};