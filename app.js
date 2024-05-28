const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/config/db');


// const imageRoutes = require('./routes/imageRoutes');
// const collectionRoutes = require('./routes/collectionRoutes');

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

// app.use('/api/images', imageRoutes);
// app.use('/api/collections', collectionRoutes);

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
