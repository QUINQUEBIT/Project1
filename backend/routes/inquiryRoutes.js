const express = require("express");
const { submitInquiry } = require("../controllers/inquiryController");
const router = express.Router();

// Route to submit a new inquiry
router.post("/", submitInquiry);

module.exports = router;
