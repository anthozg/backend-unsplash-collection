// models/image.js
const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
  url: String,
  description: String,
  tags: [String]
});
module.exports = mongoose.model('Image', imageSchema);
