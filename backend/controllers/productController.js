const products = require('../../frontend/assets/gallery/products.json');

const getProducts = (req, res) => {
  res.json(products);
};

module.exports = { getProducts };
