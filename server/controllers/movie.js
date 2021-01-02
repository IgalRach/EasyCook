const Movie = require('../models/movie');
 
const create = (req, res) => {
 
    const movie = new Movie({
        title: req.body.title,
        length: req.body.length,
        rating: req.body.rating,
        cast: []
    })
 
    movie.save().then(() => {
        res.redirect('/movies');
    }).catch(error => {
        res.send('Already exists!' + error)
    });
}
 
const get = (req, res) => {
    Movie.find().then(results => {
        res.json(results)
    });
}
 
const getById = (req, res) => {
    Movie.find({
            "title": {
                //$regex: `.*${req.params.movieTitle}.*`
                $regex: new RegExp(req.params.movieTitle, "i")
            }
        })
        .then(results => {
            res.json(results)
        });
}
 
const update = (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            console.log(movie)
            if (movie) {
                movie.title = req.body.title;
                movie.length = req.body.length;
                movie.rating = req.body.rating;
                movie.save().then(() => res.redirect('/movies'));
            } else
                res.send('No results');
        })
        .catch(err => {
            res.status(400).json("Error: " + err)
        })
}
 
const remove = (req, res) => {
    Movie.findByIdAndDelete(req.params.id).then(() => res.send('success')).catch(() => res.send('Failure'));
}
 
module.exports = {
    create,
    get,
    getById,
    update,
    remove
}
