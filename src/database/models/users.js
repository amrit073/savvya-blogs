const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    fbid: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    googleid: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    posts: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        return this.getDataValue("posts").split(";");
      },
      set(val) {
        this.setDataValue("posts", val.join(";"));
      },
    },
  });
};
