const express = require('express');
const path = require('path');
require('dotenv').config();

const galleryRoutes = require('./routes/galleryRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));

app.use('/api/gallery', galleryRoutes);
app.use('/api/products', productRoutes);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../frontend/views'));

// Serve EJS Pages
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about-us", (req, res) => {
  res.render("about-us", { title: "About Us" });
});

app.get("/services", (req, res) => {
  res.render("services", { title: "Services" });
});

app.get("/projects", (req, res) => {
  res.render("projects", { title: "Projects" });
});

app.get("/products", (req, res) => {
  res.render("products", { title: "Products" });
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
