'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpecialtiesSchema = Schema({
    name: String,
    createdBy: {type: Schema.ObjectId, ref: 'User'},
    updatedBy: {type: Schema.ObjectId, ref: 'User'},
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Specialtie', SpecialtiesSchema);