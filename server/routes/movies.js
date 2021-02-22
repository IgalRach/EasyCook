const express  = require('express');
//const MongoClient = require('mongodb').MongoClient; //instead we use mongoose!
const mongoose = require('mongoose');
const movieController = require('../controllers/movie');
var router = express.Router();
const connectionString = 'mongodb://127.0.0.1:27017/Netflix'; //our db

/*MongoClient.connect(connectionString, (err, client) => {// connect to the mongo server
    if(err) return console.error(err); //in case we cant connect

    const db = client.db('Netflix');
    const movies = db.collection('movie'); //we dont need it anymore' cause we use schemas
    */ 
mongoose.connect(connectionString)

    router.get('/', movieController.get);

    router.get('/:movieTitle', movieController.getByTitle);

    router.post('/', movieController.create);

    router.put('/', movieController.update);

    router.delete('/', movieController.remove);

module.exports = router;
