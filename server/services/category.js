const Category = require("../models/category");
const Recipe = require("../models/recipe");



const createCategory = async (req) => {
  await Category.findOne({ categoryname: req.body.categoryname }, function (err, category) {
    if (err) console.log(err);
    if (category) console.log("The category already exist");
    else {
      var category = new Category({
        categoryname: req.body.categoryname,
      });
       category.save(function (err, something) {
        if (err) console.log(err);
        console.log("Created new category");
      });
    }
  });
};


const getcategories = async () => {
  const category = await Category.find();
  return category;
};


const getCategoryByName = async (req) => {
  const category = await Category.find({
    'categoryname': { $regex: `.*${req.params.categoryname}.*` }
  })
  return category;
}


const deleteCategory = async (categoryn) => {
  const category= await Category.findOne({categoryname: categoryn});
  var recipes= category.recipes;
  for(var recipe in recipes){
    await Recipe.deleteOne({_id: recipes[recipe]});
  }
  await Category.deleteOne({categoryname: categoryn});

}



module.exports = {
  createCategory,
  getcategories,
  getCategoryByName,
  deleteCategory,
}