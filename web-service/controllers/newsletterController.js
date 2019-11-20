'use strict';


var mongoose = require('mongoose'),
  NewsLetter = mongoose.model('Newsletter');


exports.create = function(req, res) {
  var new_task = new NewsLetter(req.body);
  new_task.save(function(err, subscribe) {
    if (err)
      res.send(err);
    res.json(subscribe);
  });
};



exports.delete = function(req, res) {
  NewsLetter.remove({
    email: req.params.emailId
  }, function(err, email) {
    if (err)
      res.send(err);
    res.json({ message: 'Email successfully Unsubscribed' });
  });
};

