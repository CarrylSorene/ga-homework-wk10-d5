var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String
});

module.exports = mongoose.model('Post', PostSchema);