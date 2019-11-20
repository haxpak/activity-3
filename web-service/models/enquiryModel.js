'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EnquirySchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the user name'
  },
  description: {
      type: String,
      required: 'Enquiry Description'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  message: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Enquiries', EnquirySchema);