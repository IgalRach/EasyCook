const CookingTerms = require("../services/cookingTerms");

//create
const createCookingTerm = async (req, res) => {
    var cookingTerm = await CookingTerms.createCookingTerm(req);
    try {
      res.json(cookingTerm);
    } catch (err) {
      res.status(500).send(err);
    }
};

//get
const getCookingTerms = async (req,res)=>{
  const cookingTerm= await CookingTerms.getCookingTerms();
  try {
      res.json(cookingTerm);
  } catch (err) {}
}

//getById
const getCookingTermById= async (req,res)=>{
  console.log(req.params.id);
  const cookingTerm= await CookingTerms.getCookingTermsById(req.params.id); 
  try {
      console.log("houdhgoehgoer");

      res.json(cookingTerm);
  } catch (err) {
      return res.status(404).json({errors:['recipe not found']});
  }
};

const getCookingTermByName = async (req,res)=>{

  const term= await CookingTerms.getCookingTermByName(req);
  try {
      res.json(term);
  } catch (error) {
      
  }
}



//update
const updateCookingTerm = async (req, res) => {
  var cookingTerm = await CookingTerms.updateCookingTerm(req);
  try {
    res.send(cookingTerm);
  } catch (err) {
    res.status(500).send(err);
  }
};

//remove
const deleteCookingTerm = async (req,res)=>{
    const cookingTerm = await CookingTerms.deleteCookingTerm(req.params.id);
    res.send();
  }
  
  module.exports={
      createCookingTerm,
      getCookingTerms,
      getCookingTermById,
      getCookingTermByName,
      updateCookingTerm,
      deleteCookingTerm
  }
  