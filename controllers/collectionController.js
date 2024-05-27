// controllers/collectionController.js
const Collection = require('../models/collection');
exports.getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find().populate('images');
    res.json(collections);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Otros métodos CRUD...
