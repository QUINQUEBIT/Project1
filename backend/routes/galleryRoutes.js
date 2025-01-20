const express = require("express");
const router = express.Router();

// Example route for gallery
router.get("/", async (req, res) => {
  try {
    const galleries = await Gallery.findAll(); // Adjust to your actual model and method
    res.json(galleries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch galleries" });
  }
});

module.exports = router;
