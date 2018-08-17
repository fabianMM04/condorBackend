'use strict'

// Modules
var bcrypt = require('bcrypt-nodejs');
var moment = require('moment');
var User = require('../models/user');

// Get users
function getUsers(req, res){
    // search all users
    User.find({}).exec((err, users) =>{
        if(err){
            res.status(500).send({
                message: "Request Error"
            });
        }else{
            if(!users){
                res.status(404).send({
                    message: "Error to find users"
                })
            }else{
                res.status(200).send({
                    users
                });
            }
        }
    });
}

// Create user
function saveUser(req, res){
    var user = new User();
    var params = req.body;

    // Validate that email and password exists
    if(params.email && params.password){

        // Search one user that match by email
        User.findOne({'email': params.email}).exec((err, userFinded) =>{
            if(err){
                res.status(500).send({
                    message: "Request error"
                });
            }else{
                // If user doesn't exist create one with the data that came from the request
                if(!userFinded){
                    user.name = params.email;
                    user.email = params.name;
                    user.userRegistre = moment().format('YYYY MM DD HH:mm:ss');
                    
                    // Encrypt the password and save the user
                    bcrypt.hash(params.password, null, null, function (err, hash){
                        user.password = hash;
                        user.save((err, userStored) =>{
                            if(err){
                                res.status(500).send({
                                    message: "Request error"
                                });
                            }else{
                                if(!userStored){
                                    res.status(404).send({
                                        message: "Error to save the user"
                                    })
                                }else{
                                    res.status(200).send({
                                        user: userStored
                                    });
                                }
                            }
                        })
                    });
                }else{
                    res.status(200).send({
                        message: "User already exist"
                    });
                }
            }
        })
    }
}

// update user
function updateUser(req, res){
    var userId = req.params.id;
    var update = req.body;
    
    // Search a user by ID and update with the data that came from the request
    User.findByIdAndUpdate(userId, update, {new: true}, (err, userUpdated) =>{
        if(err){
            res.status(500).send({
                message: "Request error"
            });
        }else{
            if(!userUpdated){
                res.status(404).send({
                    message: "Error to update user"
                });
            }else{
                res.status(200).send({
                    user: userUpdated
                });
            }
        }
    })
}



module.exports = {
    getUsers,
    saveUser,
    updateUser
}