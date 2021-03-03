const Recipe = require("../services/recipe");

// Getting All Recipes From the Database - Really Needed?
exports.getAllRecepies = async (req, res) => {
  var recipies = await Recipe.getAllRecepies();
  try {
    res.send(recipies);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create and Insert New Recipe to DB
exports.createRecipe = async (req, res) => {
  try {
    var recipe = Recipe.createRecipe(req);
    res.send(recipe);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    var recipe = Recipe.updateRecipe(req);
    res.send(recipe);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    var recipe = Recipe.deleteRecipe(req);
    res.send(recipe);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Get all Comments of Specific Recipe
exports.getRecipeComments = async (req, res) => {
  var comments = await Recipe.getRecipeComments(req);
  try {
    if(comments) res.send(comments);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Add Comment To Specific Recipe
exports.addCommentToRecipe = async (req, res) => {
  try {
    Recipe.addCommentToRecipe(req);
    return res.status(200).json({ message: "message received" });
  } catch (error) {
    console.log("error message:", error);
    return res
      .status(500)
      .json({ message: "Oops... looks like something went wrong" });
  }
};

// Getting Specific Recipe Fundamentals By Name From The API
exports.getRecipeDataByName = async (req, res) => {
  var recipeData = await Recipe.getDataRecipeByName(req);
  res.send(recipeData);
};

exports.getRecipeRatingById= async (req, res) => {
  var recipeRating = await Recipe.getRecipeRatingById(req);
  res.send(recipeRating);
};


// Getting Specific Recipe Rating From API - NOT REAL TIME RATES
exports.getTodayRecipeRatingByName = async (req, res) => {
  var recipeRating = await Recipe.getTodayRecipeRatingByName(req);
  res.send(recipeRating);
};

// Getting Historical Recipe RatingFrom API - For Charts
exports.getHistoricalRecipeRatingByName = async (req, res) => {
  var recipeRating = await Recipe.getHistoricalRecipeRatingByName(req);
  res.send(recipeRating);
};