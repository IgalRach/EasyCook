const { emit } = require("../models/cookingTerm");
const cookingTermModel = require("../models/cookingTerm");

const createCookingTerm = async (req) => {
  cookingTermModel.findOne({ title: req.body.title }, function (err, term) {
    if (err) console.log(err);
    if (term) console.log("This cooking term already exist");
    else {
      var term = new cookingTermModel({
        title: req.body.termName,
        description: req.body.des,
      });
      await term.save(function (err, example) {
        if (err) console.log(err);
        console.log("New term created!");
      });
    }
  });
};


const getCookingTerms = async () => {
  const terms = await cookingTermModel.find({});
  return terms;
};


const updateCookingTerm = async (req) => {
  var termChange = req.body.term;
  var name = req.body.termName;
  var des = req.body.des;
  var fl = req.body.fl;
  cookingTermModel.updateOne({ title: termChange }, { title: name, description: des, firstLetter: fl }, function (err, term) {
    if (err) console.log(err);
    console.log("Cooking term updated");
    return term;
  });
};

// const deleteCookingTerm = async (req) => {
//   var query = req.params.termName;
//   cookingTermModel.deleteOne({ title: query }, (err, doc) => {
//     if (err) {
//       console.log("Something wrong when deleting data!");
//     }
//     console.log("Term removed");
//   });
// };

const deleteCookingTerm = async (id) => {
  const recipe = await cookingTermModel.findById(id);
  console.log(recipe);

  if (!recipe)
      return null;
  await recipe.remove();
}

// const deleteCookingTermsByLetter = async (req) => {
//   var query = req.body.firstLetter;
//   cookingTermModel.deleteMany({ firstLetter: query }, (err, doc) => {
//     if (err) {
//       console.log("Something wrong when deleting data!");
//     }
//     console.log("Cooking terms removed by letter");
//   });
// };

const getCookingTermByName = async (req) => {
  var query = req.body.title;
  const term = await cookingTermModel.findOne({ title: query }, (err, doc) => {
    if (err) {
      console.log("Something wrong when getting data!");
    }
  });
  return term;
};




const groupBy = async () => {
  const data = await cookingTermModel.aggregate([{
    $group: {
      _id: "$firstLetter",
      total: { $sum: 1 }
    }

  }]);
  return data;
}


const mapReduce = async () => {

  console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

  var map = function () { emit(this.title, this.firstLetter) };
  var reduce = function (title, fl) { return fl + "aa"; };
  await cookingTermModel.mapReduce(map, reduce, { out: "resultCollection1" });


}

module.exports = {
  getCookingTerms,
  getCookingTermByName,
  createCookingTerm,
  deleteCookingTerm,
  updateCookingTerm,
  groupBy,
  mapReduce
};