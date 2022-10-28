"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Goods", {
      goodsId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
      },
      goodsImage: {
        type: Sequelize.STRING,
      },
      goodsName: {
        type: Sequelize.STRING,
      },
      goodsPrice: {
        type: Sequelize.INTEGER,
      },
      goodsSale: {
        type: Sequelize.INTEGER,
      },
      delivery: {
        type: Sequelize.STRING,
      },
      seller: {
        type: Sequelize.STRING,
      },
      deliveryType: {
        type: Sequelize.STRING,
      },
      salesUnit: {
        type: Sequelize.STRING,
      },
      volume: {
        type: Sequelize.STRING,
      },
      origin: {
        type: Sequelize.STRING,
      },
      allergy: {
        type: Sequelize.STRING,
      },
      shelfLife: {
        type: Sequelize.STRING,
      },
      notification: {
        type: Sequelize.STRING,
      },
      exImage: {
        type: Sequelize.STRING,
      },
      exName: {
        type: Sequelize.STRING,
      },
      exContent: {
        type: Sequelize.STRING,
      },
      ingredients: {
        type: Sequelize.STRING,
      },
      process: {
        type: Sequelize.STRING,
      },
      recommendation: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Goods");
  },
};
