'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpecialtiesSchema = Schema({
    name: String,
    createdBy: Number,
    updatedBy: Number,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Specialtie', SpecialtiesSchema);