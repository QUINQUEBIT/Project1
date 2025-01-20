const express = require("express");
const { getProducts, addProduct } = require("../controllers/productController");
const router = express.Router();

// Route to fetch all products
router.get("/", getProducts);

// Route to add a new product
router.post("/", addProduct);

module.exports = router;
