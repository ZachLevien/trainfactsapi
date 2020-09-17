'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Locomotive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  Locomotive.init({
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    locomotiveName: DataTypes.STRING,
    modelNumber: DataTypes.STRING,
    manufacturerId: DataTypes.UUID,
    inServiceAt: DataTypes.DATEONLY,
    outServiceAt: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Locomotive',
  });
  return Locomotive;  
};