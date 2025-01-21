const path = require('path');

// Controller to serve product images and details
exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/assets/gallery/photos'));
};
