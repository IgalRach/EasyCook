const express = require('express');
const CommentController = require('../controllers/comment')

var router = express.Router();

router.get('/',CommentController.get);

router.get('/:recipeTitle', CommentController.getByTitle);

router.post('/',CommentController.create);

router.put('/', CommentController.update);

router.delete('/', CommentController.remove);


module.exports = router;