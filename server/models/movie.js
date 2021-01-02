const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema({
    title: String,
    length: Number,
    rating: Number
})

module.exports= mongoose.model('Recepie', Movie)