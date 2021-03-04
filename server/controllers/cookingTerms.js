const CookingTerms = require("../services/cookingTerms");

 // create new term
const createCookingTerm = async (req, res) => {
    var term = await CookingTerms.createCookingTerm(req);
    try {
      res.json(term);
    } catch (err) {
      res.status(500).send(err);
    }
};

module.exports={
    createCookingTerm
}