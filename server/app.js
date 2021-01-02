const express = require('express');
const bodyParser =require ('body-parser');
const movies =requestAnimationFrame('./routes/movies');
const genres = require('/routes/genres');
var cors=require('cors');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use('/movies', movies);
app.listen('/genres', genres);

app.listen(8081);