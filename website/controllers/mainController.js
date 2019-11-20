'use strict';

let fs = require('fs');

exports.index = function (req, res){
    res.render('index');

};

exports.enquiry = function(req, res){
    res.render('enquiry');
}