var express = require('express');
const mongoose = require('mongoose')
const MovieController = require('../controllers/movie')
var router = express.Router();
const connectionString = 'mongodb://127.0.0.1:27017/Netflix';
 
mongoose.connect(connectionString)
 
router.get('/', MovieController.get);
 
router.get('/:movieTitle', MovieController.getById);
 
router.post('/', MovieController.create);
 
router.put('/:id', MovieController.update);
 
router.delete('/:id', MovieController.remove);
 
 
module.exports = router;