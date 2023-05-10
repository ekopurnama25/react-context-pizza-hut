"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("foods", {
      id_foods: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      jenis_pizza: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qty: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      harga_pizza: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      desc_pizza: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      images: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createAttoken: Sequelize.DATE,
      updateAttoken: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("foods");
  },
};
