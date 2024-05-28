// models/image.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const imageSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
});


const Image = model('Image', imageSchema);

module.exports = Image;
