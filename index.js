'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

mongoose.connect('mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('Conexion exitosa BD');
        app.listen(port, () => {
            console.log('Servidor con nodejs y express');
        });
    }
});