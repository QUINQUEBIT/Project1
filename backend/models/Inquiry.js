const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Inquiry = sequelize.define("Inquiry", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Inquiry;
