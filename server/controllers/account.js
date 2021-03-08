const { ObjectId } = require('mongodb');
const Account = require('../models/account');

const create = (req, res) => {
    const account = new Account({
        accountId: ObjectId(null),
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        //  profilePicture: req.body.type,

        // array of recipes
    });

    account.save().then(accountId = ObjectId()).then(() => {
        res.redirect('/accounts');
    }).catch(error => {
        res.send('failed');
    });
}

const get = (req, res) => {
    Account.find().then(results => {
        res.json(results);
    });
}

const getByTitle = async (req, res) => {

    try {
        const accoumt = await Account.findById(req.params.id);
        res.json(accoumt);
    } catch (error) {
    }

}

const update = (req, res) => {
    res.send('Put entry point');
}

const remove = (req, res) => {
    res.send('Delete entry point');
}
module.exports = { create, get, getByTitle, update, remove }