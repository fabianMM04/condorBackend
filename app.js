'use strict'

// modules
var express = require('express');
var bodyParser = require('body-parser');
var user_routes = require('./routes/user');
var provider_routes = require('./routes/provider');

var app = express();



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configure Headers and cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

});

// Base routes
app.use('/api', user_routes);
app.use('/api', provider_routes);

module.exports = app;