const express = require("express");
const { addInquiry } = require("../controllers/inquiryController");
const router = express.Router();

router.post("/", addInquiry);

module.exports = router;
