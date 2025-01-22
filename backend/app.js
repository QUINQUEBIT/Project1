const express = require('express');
const path = require('path');
require('dotenv').config();

const galleryRoutes = require('./routes/galleryRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));


// API routes
app.use('/api/gallery', galleryRoutes);
app.use('/api/products', productRoutes);


// Home Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
