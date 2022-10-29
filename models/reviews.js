"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init(
    {
      reviewId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      goodsId: {
        type: DataTypes.INTEGER,
        require: true,
      },
      goodsName: {
        type: DataTypes.STRING,
        require: true,
      },
      name: {
        type: DataTypes.STRING,
        require: true,
      },
      review: {
        type: DataTypes.STRING,
        require: true,
      },
      reviewImage: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Reviews",
    }
  );
  return Reviews;
};
