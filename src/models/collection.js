// models/collection.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;


const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  images: [{ 
    type: ObjectId, 
    ref: 'Image' 
  }],

  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  }},

  { timestamps: true }
);

const Collection = model('Collection', collectionSchema);
module.exports = Collection;
