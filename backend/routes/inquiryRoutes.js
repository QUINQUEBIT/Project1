const express = require("express");
const router = express.Router();

// Example route for inquiries
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newInquiry = await Inquiry.create({ name, email, message });
    res.status(201).json(newInquiry);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
});

module.exports = router;
