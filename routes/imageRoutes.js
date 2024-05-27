// routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/', imageController.getAllImages);
// Otras rutas CRUD...

module.exports = router;
