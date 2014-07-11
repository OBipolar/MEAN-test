'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EntrySchema = new Schema({
  text: String
});

module.exports = mongoose.model('Entry', EntrySchema);
