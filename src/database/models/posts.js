const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("post", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      autoIncrement: true,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    poster: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    rise: {
      type: DataTypes.INTEGER,
      default: 0,
    },
  });
};
