const express = require("express");
const router = express.Router();

const cookingTerm = require("../controllers/cookingTerm");

//GET
router.get("/terms/:termName", cookingTerm.getCookingTermByName); //Not necessarily needed
router.get("/terms/:termNameByLetter", cookingTerm.getCookingTermsByFirstLetter); //Not necessarily needed
router.get("/terms", cookingTerm.getAllCookingTerms);
router.get("/import", cookingTerm.scrape);
router.get("/groupby", cookingTerm.groupBy);
router.get("/map",cookingTerm.mapReduce);
//CREATE
router.post("/terms", cookingTerm.createCookingTerm);

//UPDATE
router.put("/terms/update", cookingTerm.updateCookingTerm);

//DELETE
router.delete("/terms/:termName", cookingTerm.deleteCookingTerm);
router.delete("/terms/:termNameByLetter", cookingTerm.deleteCookingTermsByLetter);

module.exports = router;