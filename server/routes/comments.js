const express = require('express');
const CommentController = require('../controllers/comment')

var router = express.Router();

router.get('/:recipeId',CommentController.get);

router.get('/:recipeid/:commentid', CommentController.getById);

router.post('/:recipeid',CommentController.create);

//router.put('/', CommentController.update);

router.delete('/:recipeid/:commentid', CommentController.remove2);


module.exports = router;