'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProviderSchema = Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    status: Boolean,
    createdBy: {type: Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Provider', ProviderSchema);