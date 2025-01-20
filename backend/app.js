const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");

require("dotenv").config();

const galleryRoutes = require("./routes/galleryRoutes");
const productRoutes = require("./routes/productRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/gallery", galleryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/inquiry", inquiryRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Sync database and start server
sequelize.sync({ alter: true }).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
});
