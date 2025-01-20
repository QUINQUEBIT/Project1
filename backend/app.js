const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Import route files for products, gallery, and inquiries
const productRoutes = require("./routes/productRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON requests

// Routes
app.use("/api/products", productRoutes);  // Product-related endpoints
app.use("/api/gallery", galleryRoutes);   // Gallery-related endpoints
app.use("/api/inquiries", inquiryRoutes); // Inquiries-related endpoints

// Basic root endpoint for testing
app.get("/", (req, res) => {
  res.send("Hello, World! Server is running.");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error stack for debugging
  res.status(500).send("Something went wrong! Please try again later.");
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
