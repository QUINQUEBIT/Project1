const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// Route for fetching gallery data
router.get('/', galleryController.getGallery);

module.exports = router;
