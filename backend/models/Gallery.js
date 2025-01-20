const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Gallery = sequelize.define("Gallery", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Gallery;
