const express = require('express');
const CategoryController = require('../controllers/category')

var router = express.Router();

router.get('/',CategoryController.getCategories);

router.get('/category/:categoryname', CategoryController.getCategoryByName);

router.post('/',CategoryController.createCategory);

//router.put('/', CommentController.update);

router.delete('/:categoryname', CategoryController.deleteCategory);


module.exports = router;