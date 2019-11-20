'use strict';
module.exports = function(app) {
  var enquiries = require('../controllers/enquiryController');
  
  // enquiry Web Service Routes
  app.route('/subscribe')
    .post(enquiries.create);
  
};
