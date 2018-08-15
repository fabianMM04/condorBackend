'use strict'

var bcrypt = require('bcrypt-nodejs');

var User = require('../models/user');

// Get users
function getUsers(req, res){
    User.find({}).exec((err, users) =>{
        if(err){
            res.status(500).send({
                message: "Request Error"
            });
        }else{
            if(!users){
                res.status(404).send({
                    message: "User doesn't exist"
                })
            }else{
                res.status(200).send({
                    users
                });
            }
        }
    });
}




module.exports = {
    getUsers,
    saveUser
}