const { Inquiry } = require("../models");

const addInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const inquiry = await Inquiry.create({ name, email, message });
    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit inquiry" });
  }
};

module.exports = { addInquiry };
