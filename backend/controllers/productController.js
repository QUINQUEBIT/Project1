const { Product } = require("../models");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = await Product.create({ name, description, price });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

module.exports = { getAllProducts, addProduct };
