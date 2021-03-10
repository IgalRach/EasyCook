const Recipe = require('../models/recipe');
const Category = require('../models/category');
const Comment = require('../models/comment');


const createRecipe = async (req) => {
    const category = await Category.findOne({ categoryname: req.body.category });
    Recipe.findOne({ recipename: req.body.recipename }, function (err, recipe) {
        if (err) console.log(err);
        if (recipe) console.log("The recipe is already exist");
        else {
            var recipe = new Recipe({
                recipename: req.body.recipename,
                description: req.body.description,
                recipePic: req.body.recipePic,
                category: category.categoryname
            });
            recipe.save().then((newrecipe => {
                category.recipes.push(newrecipe);
                category.save(function (err, something) {
                    if (err) console.log(err);
                    console.log("Created new recipe");
                });
            }));
        }
    });
};



const getRecipeById = async (id) => {
    return await Recipe.findById(id);
}


const getRecipes = async () => {
    const recipe = await Recipe.find();
    return recipe;
}


const getRecipeByTitle = async (req) => {
    const recipe = await Recipe.find({
        'recipename': { $regex: `.*${req.params.recipename}.*` }
    })
    return recipe;
}

const getCategoryRecipes = async (req) => {
    const category = await Category.findOne({ categoryname: req.body.category });
    for(var i in category.recipes){
        const recipe= Recipe.findById(category.recipes[i]);
        json(recipe);
    }

    return category.recipes;
}



//need to fix
const updateRecipe = async (req) => {
    const recipe = await Recipe.findById(req.params.id);
    if(!recipe){
        return null;
    }
    recipe.recipename=req.body.recipename;
    recipe.description=req.body.description;
    recipe.category=req.body.category;
    recipe.recipePic=req.body.recipePic;
    await recipe.save();
    return recipe;

}


//work
const deleteRecipe = async (id) => {
    const recipe = await getRecipeById(id);
    const category = await Category.findOne({ categoryname:recipe.category});
    //for(var com in category.recipes)
    //      Category.deleteOne({recipes:})
        

    if (!recipe)
        return null;
    await recipe.remove();
}

module.exports = {
    createRecipe,
    getRecipeById,
    getRecipes,
    getRecipeByTitle,
    getCategoryRecipes,
    updateRecipe,
    deleteRecipe
}