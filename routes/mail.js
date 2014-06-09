var express  = require('express');

var mcapi = require('../node_modules/mailchimp-api/mailchimp');

// configuration ===============================================================

var mc = new mcapi.Mailchimp('1666b1785bd15232d67f1f986ab77be9-us8');
var listID = 'b420e148b7';

exports.subscribe = function(req, res){
  
  console.log(req.body.email);
  mc.lists.subscribe({id: listID, email:{email:req.body.email}}, function(data) {
      
      res.writeHead(200);
       res.end();
    },
    function(error) {
      if (error.error) {
        res.writeHead(400);
         res.end();
      } else {
        req.session.error_flash = 'There was an error subscribing that user';
      }
       
    });
};