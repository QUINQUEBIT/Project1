// backend/controllers/productController.js
const productData = require('../../frontend/assets/gallery/products.json');

exports.getProducts = (req, res) => {
  res.status(200).json({ success: true, data: productData.products });
};
