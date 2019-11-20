'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NewsLetterSchema = new Schema({
  email: {
    type: String,
    required: 'Newsletter Subscribe Email'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  message: {
    type: [{
      type: String,
      enum: ['subscribe', 'unsubscribe']
    }],
    default: ['subscribe']
  }
});

module.exports = mongoose.model('Newsletter', NewsLetterSchema);