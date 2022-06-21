const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../index");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "User",
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;
