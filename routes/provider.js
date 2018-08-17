'use strict'
var express = require('express');

var ProviderController = require('../controllers/provider');

var api = express.Router();

api.post('/provider', ProviderController.saveProvider);
api.get('/providers', ProviderController.getProviders);
api.get('/provider/:id', ProviderController.getProvider);
api.put('/provider/:id', ProviderController.updateProvider);
api.delete('/provider/:id', ProviderController.deleteProvider);

module.exports = api;