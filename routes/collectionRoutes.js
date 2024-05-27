// routes/collectionRoutes.js
const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

router.get('/', collectionController.getAllCollections);
// Otras rutas CRUD...

module.exports = router;
