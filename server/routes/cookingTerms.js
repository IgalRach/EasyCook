const express = require('express');

const cookingTermsController = require('../controllers/cookingTerms');

var router = express.Router();

// const CookingTerm = require('../models/cookingTerm');

router.get('/cookingTerms', cookingTermsController.getCookingTerms);

//need to check.
router.get('/cookingTerms/recipe/:title', cookingTermsController.getCookingTermByName);

router.get('/cookingTerms/:id', cookingTermsController.getCookingTermById);

router.get('/scrape', cookingTermsController.scrape);

router.post('/cookingTerms', cookingTermsController.createCookingTerm);

router.put('/cookingTerms', cookingTermsController.updateCookingTerm);

router.delete('/cookingTerms/:id', cookingTermsController.deleteCookingTerm);



module.exports = router;
