const path = require('path');
const fs = require('fs');

exports.getGallery = (req, res) => {
  const galleryPath = path.join(__dirname, '../../frontend/assets/gallery/products.json');
  fs.readFile(galleryPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load gallery data' });
    }
    res.json(JSON.parse(data));
  });
};
