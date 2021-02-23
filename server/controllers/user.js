const User = require('../models/user');

const create = (req, res) => {
    const user = new User({
        id: req.user.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role // admin or user
    });

    user.save().then(() => {
        res.json({ status: 'success' });
    }).catch(() => {
        res.json({ status: 'failed' });
    });
}

const getByUsername = (req, res) => {
    User.findOne({ username: req.params.username })
        .then(user => {
            res.json(user);
        })
}

module.exports = { create, getByUsername };