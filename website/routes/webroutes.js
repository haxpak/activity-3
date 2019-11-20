'use strict';

module.exports = function(app) {

    var controller = require('../controllers/mainController');
     //Website Routes
  app.route('/').get(controller.index);

  // route for get enquiry page
  app.route('/enquire').get(controller.enquiry);

  // route for get newsletter pae

  


}