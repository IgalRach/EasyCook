const express = require('express');

const cookingTermsController = require('../controllers/cookingTerms');

var router = express.Router();

// const CookingTerm = require('../models/cookingTerm');

router.get('/', cookingTermsController.getCookingTerms);

//need to check.
router.get('/recipe/:title', cookingTermsController.getCookingTermByName);

router.get('/:id', cookingTermsController.getCookingTermById);

router.post('/', cookingTermsController.createCookingTerm);

router.put('/', cookingTermsController.updateCookingTerm);

router.delete('/:id', cookingTermsController.deleteCookingTerm);



module.exports = router;
