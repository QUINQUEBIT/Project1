const { Gallery } = require("../models");

const getGallery = async (req, res) => {
  try {
    const images = await Gallery.findAll();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gallery images" });
  }
};

const addImage = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const image = await Gallery.create({ imageUrl });
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: "Failed to add image" });
  }
};

module.exports = { getGallery, addImage };
