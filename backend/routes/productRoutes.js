const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route for fetching product images
router.get('/', productController.getProducts);

module.exports = router;
