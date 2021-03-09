const { emit } = require("../models/cookingTerm");
const cookingTermModel = require("../models/cookingTerm");

const createCookingTerm = async (req) => {
  var term = new cookingTermModel({
    title: req.body.title,
    description: req.body.description 
  });
  term.save(function (err, example) {
    if (err) console.log(err);
    console.log("New term created!");
  });
}

//get
const getCookingTerms = async () => {
  const terms = await cookingTermModel.find({});
  return terms;
};

//getById
const getCookingTermsById = async (id) => {
  return await cookingTermModel.findById(id);
}

//update -needs to be checked
const updateCookingTerm = async (req) => {
  const cookingTerm = await getCookingTermsById(req.params.id);
  if (!cookingTerm)
      return null;

      cookingTerm.title = req.body.title;
      
      cookingTerm.description= req.body.description;
  await cookingTerm.save();
  return cookingTerm;
};

const getCookingTermByName = async (req) => {
  const term = await cookingTermModel.find({
      'title': { $regex: `.*${req.params.title}.*` }
  })
  return term;
}


//remove
const deleteCookingTerm = async (id) => {
  const terms = await cookingTermModel.findById(id);
  console.log(terms);

  if (!terms)
    return null;
  await terms.remove();
}

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
  createCookingTerm,
  getCookingTerms,
  getCookingTermsById,
  updateCookingTerm,
  deleteCookingTerm,
  getCookingTermByName,
  groupBy,
  mapReduce
}