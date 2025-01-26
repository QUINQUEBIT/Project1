const express = require('express');
const path = require('path');
require('dotenv').config();

const galleryRoutes = require('./routes/galleryRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));

app.use('/api/gallery', galleryRoutes);
app.use('/api/products', productRoutes);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../frontend/views'));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about-us', (req, res) => {
  res.render('about-us');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
