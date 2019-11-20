var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./web-service/models/enquiryModel'), //created model loading here
  bodyParser = require('body-parser');

var path = require('path');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/enquirydb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'website/views'));
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'website/public')));

var routes = require('./web-service/routes/enquiryRoutes'); //importing route
routes(app); //register webservice route

var webroutes = require('./website/routes/webroutes')
webroutes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('Web Service started on: ' + port);
