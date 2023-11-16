const Recipe = require('../models/recipe');
const Category = require('../models/category');


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
                category: category.categoryname,
                propTime:req.body.propTime,
                ingredients:req.body.ingredients,
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
    try {
      const recipe = await Recipe.find({
        'recipename': { $regex: new RegExp(req.params.recipename, 'i') }
      });
  
      return recipe;
    } catch (error) {
      console.error(error);
    }
  };

const getRecipesByCategory = async (req) => {
    const category = await Category.findOne({ categoryname: req.params.category }).populate('recipes');
    return category;
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
    recipe.ingredients=req.body.ingredients,
    await recipe.save();
    return recipe;

}


//work
const deleteRecipe = async (id) => {
    const recipe = await getRecipeById(id);
    const category = await Category.findOne({ categoryname:recipe.category});
    if (!recipe)
        return null;
    await recipe.remove();
}

const groupBy= async()=>{
    const data = await Recipe.aggregate([{
        $group : {
            _id : "$category",
            total: {$sum : 1}
          }  
    }]);
    return data;
}


module.exports = {
    createRecipe,
    getRecipeById,
    getRecipes,
    getRecipeByTitle,
    getRecipesByCategory,
    updateRecipe,
    deleteRecipe,
    groupBy
}