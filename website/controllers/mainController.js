'use strict';

let fs = require('fs');

exports.index = function (req, res){
    res.render('index');

};

exports.thankyou = function (req, res){
    res.render('thankyou');

};

exports.enquiry = function(req, res){
    res.render('enquiry');
}

exports.enquiry = function(req, res){
    res.render('products');
}