const express = require("express");
const { getGallery, addImage } = require("../controllers/galleryController");
const router = express.Router();

router.get("/", getGallery);
router.post("/", addImage);

module.exports = router;
