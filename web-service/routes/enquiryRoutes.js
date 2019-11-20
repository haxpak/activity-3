'use strict';
module.exports = function(app) {
  var enquiries = require('../controllers/enquiryController');
  
  // enquiry Web Service Routes
  app.route('/enquiries')
    .get(enquiries.list)
    .post(enquiries.create);


  app.route('/enquiries/:enquiryId')
    .get(enquiries.read)
    .put(enquiries.update)
    .delete(enquiries.delete);
  
  
};
