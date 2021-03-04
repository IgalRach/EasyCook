const Category = require("../models/category");

const createCategory = async (req) => {
    Category.findOne({ title: req.body.categoryname }, function (err, category) {
      if (err) console.log(err);
      if (term) console.log("The category already exist");
      else {
        var category = new Category({
          title: req.body.categoryname,
        });
        await category.save(function (err,something) {
          if (err) console.log(err);
          console.log("Created new category");
        });
      }
    });
  };

  const getcategories = async () => {
    const caegory = await Category.find({});
    return caegory;
  };

  

module.exports = {
    createCategory,
    getcategories,
}