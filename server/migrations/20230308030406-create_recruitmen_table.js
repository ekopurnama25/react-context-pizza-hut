"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("recruitmen", {
      id_recruitmen: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nama_lengkap: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      pendidikan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      usia: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      no_wa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hobi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tujuan_bergabung: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createAttoken: Sequelize.DATE,
      updateAttoken: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("recruitmen");
  },
};
