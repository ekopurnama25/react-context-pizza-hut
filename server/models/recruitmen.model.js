("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recruitmen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.User, {
      //   sourceKey: "id_users",
      //   foreignKey: "id_users",
      //   as: "User",
      // });
    }
  }
  Recruitmen.init(
    {
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
    },
    {
      sequelize,
      modelName: "Recruitmen",
    }
  );
  return Recruitmen;
};
