// Required Files and Structure: Updated and Detailed Code for Your Website

// 1. Backend: app.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const galleryRoutes = require('./routes/galleryRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views'));

// Middleware
app.use(express.static(path.join(__dirname, 'frontend/assets')));
app.use(express.json());

// Routes
app.use('/gallery', galleryRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.render('index', { title: 'Suraksha Precast', description: 'India\'s Leading Manufacturer of Precast Concrete Products' });
});

app.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'About Us', content: 'Content about Suraksha Precast.' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services', services: ['Service 1', 'Service 2', 'Service 3'] });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Our Projects', projects: ['Project 1', 'Project 2', 'Project 3'] });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us', phone: '+91 9876543210', email: 'info@suraksha.com' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
