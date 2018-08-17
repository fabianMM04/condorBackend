'use strict'

// Modules
var Provider = require('../models/provider');
var Specialtie = require('../models/specialties');
var User = require('../models/user');

var moment = require('moment');

// Create provider
function saveProvider(req, res){
    var provider = new Provider();
    var params = req.body;
    // validate firstName and lastName exists
    if(params.firstName && params.lastName){

        // Search one provider that match by firstName
        Provider.findOne({firstName: params.firstName}, (err, providerFinded) =>{
            if(err){
                res.status(500).send({
                    message: "Request error"
                });
            }else{

                // If provider doesn't exist create one with the data that came from the request
                if(!providerFinded){
                    provider.firstName = params.firstName;
                    provider.lastName = params.lastName;
                    provider.middleName = params.middleName;
                    provider.status = params.status;
                    provider.user = params.user;
                    provider.specialtie = params.specialtie;
                    provider.createdDate = moment().format('YYYY MM DD HH:mm:ss');
                    provider.save( (err, providerStored) => {
                        if(err){
                            res.status(500).send({
                                message: "Request error"
                            });
                        }else{
                            if(!providerStored){
                                res.status(404).send({
                                    message: "Error to save provider"
                                });
                            }else{
                                res.status(200).send({
                                    provider: providerStored
                                });
                            }
                        }
                    });
                }else{

                }
            }
        });
    }else{

    }
}

// GET providers
function getProviders(req, res){

    // Search all providers and reference documents from users collection and specialties collection
    Provider.find({}).populate({path: 'specialtie'}).populate({path: 'user'}).exec((err, providers) => {
        if(err){
            res.status(500).send({
                message: "Request error"
            });
        }else{
            if(!providers){
                res.status(404).send({
                    message: "Error to find providers"
                });
            }else{
                res.status(200).send({
                    providers
                });
            }
        }
    });
}

// GET provider
function getProvider(req, res){
    var providerId = req.params.id;
   
    // Search a provider by an Id and reference documents from users collection and specialties collection
    Provider.findById(providerId).populate({path: 'specialtie'}).populate({path: 'user'}).exec((err, provider) => {
        
        if(err){
            res.status(500).send({
                message: "Request Error"
            });
        }else{
            if(!provider){
                res.status(404).send({
                    message: "Error to find provider"
                });
            }else{
                res.status(200).send({
                    provider
                });
            }
        }
    });
    
}

// Update provider
function updateProvider(req, res){
    var providerId = req.params.id;
    var update = req.body;

    // Search a provider by ID and update with the data that came from the request
    Provider.findByIdAndUpdate(providerId, update, {new:true}, (err, providerUpdated) =>{
        if(err){
            res.status(500).send({
                message: "Request error"
            });
        }else{
            if(!providerUpdated){
                res.status(404).send({
                    message: "Error to update provider"
                });
            }else{
                res.status(200).send({
                    provider: providerUpdated
                });
            }
        }
    });
}

// Delete provider
function deleteProvider(req, res){
    var providerId = req.params.id;

    //Search provider by ID and delete it
    Provider.findByIdAndRemove(providerId, (err, providerDeleted) => {
        if(err){
            res.status(500).send({
                message: "Request error"
            });
        }else{
            if(!providerDeleted){
                res.status(404).send({
                    message: "Error to save provider"
                });
            }else{
                res.status(200).send({
                    provider: providerDeleted
                });
            }
        }
    });
}

module.exports = {
    saveProvider,
    getProviders,
    getProvider,
    updateProvider,
    deleteProvider
}