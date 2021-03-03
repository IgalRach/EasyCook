const recipeModel = require("../models/recipe");
const commentModel = require("../models/comment");
const ratingModel = require("../models/rating");
const fetch = require("node-fetch");
var AlphaVantageAPI = require("alpha-vantage-cli").AlphaVantageAPI;
var yourApiKey = "GWODV4ZB7TPUMHKL";
var alphaVantageAPI = new AlphaVantageAPI(yourApiKey, "compact", true);

const getAllRecepies = async () => {
  const recepies = await recipeModel.find({});
  return recipies;
};

const createRecipe = async (req) => {
  var query = req.body.name;
  recipeModel.findOne({ name: query }, function (err, recipe) {
    if (err) console.log(err);
    if (recipe) console.log("This stock already been saved");
    else {
      var recipe = new recipeModel(req.body);
      recipe.save(function (err, example) {
        if (err) console.log(err);
        console.log("New recipe added");
        return recipe;
      });
    }
  });
};

const updateRecipe = async (req) => {
  var recipename = req.body.recipeName;
  const recipe = await recipeModel.findOne({ name: recipename });
  ratingModel.updateOne({ _id: recipe.rating }, {reciperating: req.body.reciperating}, function (err, recipe) {
    if (err) console.log(err);
    console.log("Recipe updated");
    return recipe;
  });
};

const deleteRecipe = async (req) => {
  var query = req.params.recipeName;
  const recipe = await recipeModel.findOne({ name: query });
  var comments = stock.comments;
  var rating = recipe.rating;
  for (const comment in comments) {
    await commentModel.deleteOne({ _id: comments[comment] });
  }
  await ratingModel.deleteOne({ _id: rating[0] });
  await recipeModel.deleteOne({ name: query });
  console.log("Recipe removed")
};

const getRecipeComments = async (req) => {
  const recipename = req.params.recipeName;
  var comments = [];
  var data = [];
  const recipe = await recipeModel.findOne({ name: recipename });
  if(recipe.comments){
    comments = recipe.comments;
    for (const comment in comments) {
      const comm = await commentModel.findOne({ _id: comments[comment] });
      data.push(comm);
    }
  }
  return data;
};

const addCommentToRecipe = async (req) => {
  const { username, comment, created } = req.body;
  // create a new message and save
  let newComment = new commentModel({ username, comment, created });
  newComment = await newComment.save();
  // get the associated user and add new message to user's messages array
  let recipe = await recipeModel.findOne({ name: req.params.recipeName });
  recipe.comments.push(newComment._id);
  recipe = await recipe.save();
};

const getDataRecipeByName = async (req) => {
  var recipe = await recipeModel.findOne({ name: req.params.recipeName });
  if(!recipe){
    recipe = new recipeModel({
      name: req.params.recipeName
    })
    recipe = await recipe.save();
  }
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${req.params.recipeName}&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
  if(recipe.rank[0]!==null){
    let rating = new ratingModel({reciperating: Math.floor(Math.random() * (10 - 3 + 1)) + 3});
      
    rating= await rating.save();
    recipe.rating.push(rating._id);
    recipe = await recipe.save();
  }
  let rating = await ratingModel.findOne({ _id: recipe.rating[0] });
  data.reciperating = rating.reciperating;
  return data;
};

const getRecipeRatingById = async (req) => {
  const id = req.params.id;
  var rating = [];
  var data = [];
  const rate = await ratingModel.findOne({ _id: id });
  data.push(rate);
  return data;
  };

const getTodayRecipeRatingByName = async (req) => {
  const recipename = req.params.recipeName;
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${recipename}&interval=5min&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
  return data;
};

const getHistoricalRecipeRatingByName = async (req) => {
  const recipename = req.params.recipeName;
  var fetchData = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${recipename}&outputsize=compact&apikey=${yourApiKey}`
  );
  var data = await fetchData.json();
  return data;
};

module.exports = {
  getAllRecepies,
  getDataRecipeByName,
  getTodayRecipeRatingByName,
  createRecipe,
  addCommentToRecipe,
  getRecipeComments,
  getHistoricalRecipeRatingByName,
  getRecipeRatingById,
  updateRecipe,
  deleteRecipe,
};