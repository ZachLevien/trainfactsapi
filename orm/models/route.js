'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Route.init({
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    routeName: DataTypes.STRING,
    railroadId: DataTypes.UUID,
    distance: DataTypes.FLOAT,
    inOperationAt: DataTypes.DATEONLY,
    outOperationAt: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};