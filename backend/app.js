require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const galleryRoutes = require('./backend/routes/galleryRoutes');
const productRoutes = require('./backend/routes/productRoutes');

// Static file serving
app.use(express.static(path.join(__dirname, 'frontend')));

// Routes
app.use('/api/gallery', galleryRoutes);
app.use('/api/products', productRoutes);

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
