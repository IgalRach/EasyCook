const express = require('express');
var router = express.Router();


const Category = require('../controllers/categorie');




router.post('/', Category.create); 

   
router.get('/', Category.get);

    

module.exports = router;