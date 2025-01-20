const { Product } = require("../models");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = await Product.create({ name, description, price });
    res.json(newProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
