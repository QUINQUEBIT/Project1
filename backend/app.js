const express = require('express');
const app = express();
const path = require('path');
const galleryRoutes = require('./routes/galleryRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/api/gallery', galleryRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
