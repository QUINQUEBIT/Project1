const express = require("express");
const router = express.Router();

// Example GET route for products
router.get("/", async (req, res) => {
  try {
    // Assuming you have a model called Product
    const products = await Product.findAll(); // Adjust to your actual model and method
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Example POST route for adding a product
router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    // Adjust model usage as per your database setup
    const newProduct = await Product.create({ name, description, price });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

module.exports = router;
