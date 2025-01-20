const sequelize = require("../config/db");
const Product = require("./Product");
const Gallery = require("./Gallery");
const Inquiry = require("./Inquiry");

// Sync all models
sequelize.sync({ alter: true }).then(() => console.log("Models synchronized"));

module.exports = { Product, Gallery, Inquiry };
