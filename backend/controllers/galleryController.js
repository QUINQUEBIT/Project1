const path = require('path');

// Controller to serve gallery data
exports.getGallery = (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/assets/gallery/products.json'));
};
