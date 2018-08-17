'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProviderSchema = Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    status: Boolean,
    user: {type: Schema.ObjectId, ref: 'User'},
    specialtie: {type: Schema.ObjectId, ref: 'Specialtie'},
    createdDate: Date
});

module.exports = mongoose.model('Provider', ProviderSchema);