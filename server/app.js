const express = require('express');
const bodyParser = require('body-parser');
const movies = require('./routes/movies');
const genres = require('./routes/genres');
var cors = require('cors');
const app = express(); //our server

app.use(cors());

app.use(bodyParser.urlencoded({extended : true}));
app.use('/movies', movies);
app.use('/genres', genres);

app.listen(8081);