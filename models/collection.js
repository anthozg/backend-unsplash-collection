// models/collection.js
const mongoose = require('mongoose');
const collectionSchema = new mongoose.Schema({
  name: String,
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
});
module.exports = mongoose.model('Collection', collectionSchema);
