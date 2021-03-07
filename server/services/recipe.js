const Recipe = require('../models/recipe');
const Category = require('../models/category');
const Comment = require('../models/comment');


//works
// const createRecipe = async (req) => {
//     const recipe = new Recipe({
//         recipename: req.body.recipename,
//         description: req.body.description,
//         recipePic: req.body.recipePic
//     });

//     await recipe.save()
//         .catch(error => {
//             console.log("creation failed");
//         });
// }

const createRecipe = async (req) => {
    Recipe.findOne({ recipename: req.body.recipename }, function (err, recipe) {
      if (err) console.log(err);
      if (recipe) console.log("The recipe is already exist");
      else {
        var recipe = new Recipe({
            recipename: req.body.recipename,
            description: req.body.description,
            recipePic: req.body.recipePic
        });
         recipe.save(function (err, something) {
          if (err) console.log(err);
          console.log("Created new recipe");
        });
      }
    });
  };






//work
const getRecipeById = async (id) => {
    return await Recipe.findById(id);
}

//works
const getRecipes = async () => {
    const recipe = await Recipe.find();
    return recipe;
}

//work
const getRecipeByTitle = async (req) => {
    const recipe = await Recipe.find({
        'recipename': { $regex: `.*${req.params.recipename}.*` }
    })
    return recipe;
}

const getCategoryRecipes = async(req,res)=>{
    const category=await  Category.findOne({categoryname: req.body.categoryname})
    .populate("Recipes");
    return category;
}

//get comment for current recipe
const getComments = async (req) => {
    // const com= await  Recipe.findOne(req.params.recipename)
    // .populate('Comments');
    // return com;
    // Recipe.findOne(req.params.recipename)
    // .populate('Comments')
    // .exec(function(err,docs){
    //     if (err) {
    //         console.error(err.stack|| err);
    //     }
    //     res.json(docs.Comments);
    // });
    const recipename = req.params.recipename;
    var comments = [];
    var data = [];
    const Recipe = await Recipe.findOne({ recipenam: recipename });
    if (recipe.comments) {
        comments = recipe.comments;
        for (const comment in comments) {
            const comm = await Comment.findOne({ _id: comments[comment] });
            data.push(comm);
        }
    }
    return data;
}


const createComment = async (req) => {
    const { username, comment, created } = req.body;
    // create a new message and save
    let newComment = new commentModel({ username, comment, created });
    newComment = await newComment.save();
    // get the associated user and add new message to user's messages array
    let stock = await stockModel.findOne({ name: req.params.stockName });
    stock.comments.push(newComment._id);
    stock = await stock.save();
};



//need to fix
const updateRecipe = async (req) => {
    const recipe= await Recipe.findById(req);
    var updetedrecipe = recipe;

    var name = recipe.body.recipename;
    var des = recipe.body.description;
    var pic = recipe.body.recipePic;
    Recipe.findOne({ recipename: updetedrecipe }, { recipename: name, description: des, recipePic: pic }
        , function (err, term) {
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
    getCategoryRecipes,
    getComments,
    createComment,
    updateRecipe,
    deleteRecipe
}