const { Inquiry } = require("../models");

exports.submitInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const inquiry = await Inquiry.create({ name, email, message });
    res.json(inquiry);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
