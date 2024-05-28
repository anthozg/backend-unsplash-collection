const mongoose = require('mongoose');
require('dotenv').config();

// Obtener la URL de conexión a la base de datos desde las variables de entorno
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/main';

mongoose.connect(DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
