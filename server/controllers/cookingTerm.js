const CookingTerm = require("../services/cookingTerms");
const scrape =require("../services/scrape");


// Getting All Stocks From the Database - Really Needed?
exports.getAllCookingTerms = async (req, res) => {
    var terms = await CookingTerm.getAllCookingTerms();
    try {
      res.send(terms);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  // geting a specific term by name from db
  exports.getCookingTermByName = async (req, res) => {
      var term = await CookingTerm.getCookingTermByName(req);
      try {
        res.send(term);
      } catch (err) {
        res.status(500).send(err);
      }
  };

  // geting all terms by first letter from db
  exports.getCookingTermsByFirstLetter = async (req, res) => {
    var terms = await CookingTerm.getCookingTermsByFirstLetter(req);
    try {
      res.send(terms);
    } catch (err) {
      res.status(500).send(err);
    }
};

 // create new term
 exports.createCookingTerm = async (req, res) => {
    var term = await CookingTerm.createCookingTerm(req);
    try {
      res.send(term);
    } catch (err) {
      res.status(500).send(err);
    }
};

// delete a specific term
exports.deleteCookingTerm = async (req, res) => {
    var term = await CookingTerm.deleteCookingTerm(req);
    try {
      res.send(term);
    } catch (err) {
      res.status(500).send(err);
    }
};

// delete all terms by specific letter
exports.deleteCookingTermsByLetter = async (req, res) => {
    var terms = await Coo.CookingTerm.deleteCookingTermsByLetter(req);
    try {
      res.send(terms);
    } catch (err) {
      res.status(500).send(err);
    }
};

// delete all terms by specific letter
exports.deleteCookingTermsByLetter = async (req, res) => {
    var terms = await CookingTerm.deleteCookingTermsByLetter(req);
    try {
      res.send(terms);
    } catch (err) {
      res.status(500).send(err);
    }
};

 // update a specific term
 exports.updateCookingTerm = async (req, res) => {
    var term = await CookingTerm.updateCookingTerm(req);
    try {
      res.send(term);
    } catch (err) {
      res.status(500).send(err);
    }
};

//import data from another page
exports.scrape = async () => {
  await scrape.scrape();  
};


exports.groupBy = async (req, res) => { 
 const data = await CookingTerm.groupBy();
 res.send(data);
};

exports.mapReduce = async (req, res) => { 
  const data = await CookingTerm.mapReduce();
  res.send(data);
 };