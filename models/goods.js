"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Goods.init(
    {
      category: {
        type: DataTypes.STRING,
      },
      goodsImage: {
        type: DataTypes.STRING,
      },
      goodsName: {
        type: DataTypes.STRING,
      },
      goodsPrice: {
        type: DataTypes.INTEGER,
      },
      goodsSale: {
        type: DataTypes.INTEGER,
      },
      delivery: {
        type: DataTypes.STRING,
      },
      seller: {
        type: DataTypes.STRING,
      },
      deliveryType: {
        type: DataTypes.STRING,
      },
      salesUnit: {
        type: DataTypes.STRING,
      },
      volume: {
        type: DataTypes.STRING,
      },
      origin: {
        type: DataTypes.STRING,
      },
      allergy: {
        type: DataTypes.STRING,
      },
      shelfLife: {
        type: DataTypes.STRING,
      },
      notification: {
        type: DataTypes.STRING,
      },
      exImage: {
        type: DataTypes.STRING,
      },
      exName: {
        type: DataTypes.STRING,
      },
      exContent: {
        type: DataTypes.STRING,
      },
      ingredients: {
        type: DataTypes.STRING,
      },
      process: {
        type: DataTypes.STRING,
      },
      recommendation: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Goods",
    }
  );
  return Goods;
};
