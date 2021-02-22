const express = require('express');

const accountController = require('../controllers/account')

var router = express.Router();



router.get('/',accountController.get);

router.get('/:recipeTitle', accountController.getByTitle);

router.post('/',accountController.create);

router.put('/', accountController.update);

router.delete('/', accountController.remove);


module.exports = router;