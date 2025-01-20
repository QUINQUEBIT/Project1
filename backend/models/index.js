const sequelize = require("../config/db");
const Gallery = require("./Gallery");
const Product = require("./Product");
const Inquiry = require("./Inquiry");

module.exports = { sequelize, Gallery, Product, Inquiry };
