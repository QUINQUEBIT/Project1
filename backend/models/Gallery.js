const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Gallery = sequelize.define("Gallery", {
  imageUrl: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Gallery;
