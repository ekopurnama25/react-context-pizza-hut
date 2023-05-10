("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Foods extends Model {
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
  Foods.init(
    {
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
    },
    {
      sequelize,
      modelName: "Foods",
    }
  );
  return Foods;
};
