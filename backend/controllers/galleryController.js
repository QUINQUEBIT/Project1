const path = require('path');

const getGallery = (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/assets/gallery/photos'));
};

module.exports = { getGallery };
