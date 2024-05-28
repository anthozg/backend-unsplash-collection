// controllers/imageController.js
const Image = require('../src/models/image');
exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Otros métodos CRUD (create, update, delete)...
