const path = require('path');
const fs = require('fs');

exports.getProducts = (req, res) => {
  const productsPath = path.join(__dirname, '../../frontend/assets/data/products.json');
  fs.readFile(productsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load products data' });
    }
    res.json(JSON.parse(data));
  });
};
