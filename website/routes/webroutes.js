'use strict';

module.exports = function(app) {

    var controller = require('../controllers/mainController');
     //Website Routes
  app.route('/').get(controller.index);
  app.route('/index').get(controller.index);

  app.route('/thankyou').get(controller.thankyou);

  // route for get enquiry page
  app.route('/enquire').get(controller.enquiry);

  // route for products page
  app.route('/products').get(controller.products);
  


}