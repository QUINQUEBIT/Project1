const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Inquiry = sequelize.define("Inquiry", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
  },
});

module.exports = Inquiry;
