const Recipe = require('../models/recipe');
const Category = require('../models/category');

//works
const createRecipe = async (req, res) => {
    const recipe = new Recipe({
        recipename: req.body.recipename,
        description: req.body.description,
        recipePic: req.body.recipePic
    });

    await recipe.save()
        .catch(error => {
            console.log("creation failed");
        });
}

//work
const getRecipeById = async (id) => {
    return await Recipe.findById(id);
}

//works
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

//need to fix
const updateRecipe = async (req) => {
    var updetedrecipe = req.body.recipe;
    var name = req.body.recipename;
    var des = req.body.description;
    var pic = req.body.recipePic;
    Recipe.findOne({ title: updetedrecipe }, { title: name, description: des, recipePic: pic }, function (err, term) {
        if (err) console.log(err);
        console.log("TERM UPDATED");
        return term;
    });
}


//work
const deleteRecipe = async (id) => {
    const recipe = await getRecipeById(id);
    console.log(recipe);

    if (!recipe)
        return null;
    await recipe.remove();
}

module.exports = {
    createRecipe,
    getRecipeById,
    getRecipes,
    getRecipeByTitle,
    updateRecipe,
    deleteRecipe
}