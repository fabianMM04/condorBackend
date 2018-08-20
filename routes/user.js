'use strict'
var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

api.get('/users', UserController.getUsers);
api.post('/create/user', UserController.saveUser);
api.put('/update/user/:id', UserController.updateUser);

module.exports = api;