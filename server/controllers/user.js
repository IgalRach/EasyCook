// const User = require('../models/user');
// const {ObjectId}= require('mongodb');

// const create = (req, res) => {
//     const user = new User({
//         id: ObjectId(null),
//         // id: req.user.id,
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         role: req.body.role // admin or user
//     });

//     user.save().then(() => {
//         res.json({ status: 'success' });
//     }).catch(() => {
//         res.json({ status: 'failed' });
//     });
// }

// const getByUsername = (req, res) => {
//     User.findOne({ username: req.params.username })
//         .then(user => {
//             res.json(user);
//         })
// }

// module.exports = { create, getByUsername };



// const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');


const User = require('../models/user');



const create = (req, res) => {

    User.findOne({email: req.body.email})
    .exec()
    .then(user => {

        if(user){
            return res.status(500).json({
                message: 'Email Already Exists'
            })
        }else{

            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    return res.status(500).json({
                        error: 'Something went wrong'
                    });
                }else{
                    const user = new User({
                        id: new mongoose.Types.ObjectId(),
                        userName: req.body.userName,
                        email: req.body.email,
                        password: hash,
                        createdAt: new Date().toISOString()
                    });

                    user.save()
                    .then(doc => {
                        res.status(201).json({
                            message: 'Account Created Successfully'
                        });
                    })
                    .catch(er => {
                        res.status(500).json({
                            error: er
                        });
                    });


                }
                
            });

        }

        
    });


}

const get = (rec,res)=>{

    User.findOne({email: req.body.email})
    .select('id username email password')
    .exec()
    .then(user => {
        if(user){

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    return res.status(500).json({
                        message: 'Login Failed'
                    })
                }else{
                    if(result){
                        const payload = {
                            userId: user.id,
                            // iat:  Math.floor(Date.now() / 1000) - 30,
                            // exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60 * 24),
                        }
                        jwt.sign(payload, 'mysecretkey', (err, token) => {
                            if(err){
                                return res.status(500).JSON({
                                    message: 'Authentication Failed'
                                });
                            }else{
                                res.status(200).json({
                                    message: {
                                        user: {
                                            userId: user.id,
                                            userName: user.userName,
                                            email: user.email
                                        },
                                        token: token
                                    }
                                })
                            }
                        })
                    }else{
                        res.status(500).json({
                            message: 'Incorrect Password'
                        });
                    }
                }
            });

        }else{
            res.status(500).json({
                message: 'Email doesnt not exists'
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            error: error
        });
    })


}


module.exports = {create,get}