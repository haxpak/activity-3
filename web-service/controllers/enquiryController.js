'use strict';


var mongoose = require('mongoose'),
  Enquiry = mongoose.model('Enquiries');

exports.create = function(req, res) {
  var new_task = new Enquiry(req.body);
  new_task.save(function(err, enquiry) {
    if (err)
      res.send(err);
    res.writeHead(302, {
        'Location': '/'
      });
    res.end();
    // res.json(enquiry);
  });
};

exports.list = function(req, res) {
  Enquiry.find({}, function(err, enquiry) {
    if (err)
      res.send(err);
    res.json(enquiry);
  });
};



exports.read = function(req, res) {
  Enquiry.findById(req.params.enquiryId, function(err, enquiry) {
    if (err)
      res.send(err);
    res.json(enquiry);
  });
};


exports.update = function(req, res) {
  Enquiry.findOneAndUpdate({_id: req.params.enquiryId}, req.body, {new: true}, function(err, enquiry) {
    if (err)
      res.send(err);
    res.json(enquiry);
  });
};


exports.delete = function(req, res) {


  Enquiry.remove({
    _id: req.params.enquiryId
  }, function(err, enquiry) {
    if (err)
      res.send(err);
    res.json({ message: 'Enquiry successfully deleted' });
  });
};

