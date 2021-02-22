const Movie = require('../models/movie');

const create = (req, res) => {
    
    const movie = new Movie ({
        title : req.body.title,
        length : parseInt(req.body.length),
        rating : parseFloat(req.body.rating)
    });

    movie.save().then(() => {
        res.redirect('/movies');
    }).catch(error => {
        res.send('failed');
    });
}

const get = (req, res) => {
    Movie.find().then(results => {
        res.json(results)
    });
}

const getByTitle = (req, res) => {
    Movie.findOne({
        'title': {
            $regex: `.*${req.params.movieTitle}.*`
        }
    })
        .then(movie => {
            res.json(movie)
        });
}

const update = (req, res) => {
    res.send('Put entry point');
}

const remove = (req, res) => {
    res.send('Delete entry point');
}

module.exports = {create, get, getByTitle, update, remove};