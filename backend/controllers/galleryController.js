const { Gallery } = require("../models");

exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findAll();
    res.json(gallery);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.addImage = async (req, res) => {
  try {
    const { image } = req.body;
    const newImage = await Gallery.create({ image });
    res.json(newImage);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
