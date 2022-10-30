"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reviews", {
      reviewId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      goodsId: {
        type: Sequelize.INTEGER,
      },
      goodsName: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      review: {
        type: Sequelize.STRING,
      },
      reviewImage: {
        type: Sequelize.STRING,
      },
      date: {
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
    await queryInterface.dropTable("Reviews");
  },
};
