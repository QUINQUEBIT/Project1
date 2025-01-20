// backend/controllers/galleryController.js
const galleryData = require('../../frontend/assets/gallery/products.json');

exports.getGallery = (req, res) => {
  res.status(200).json({ success: true, data: galleryData });
};
