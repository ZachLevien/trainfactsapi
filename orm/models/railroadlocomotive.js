'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RailroadLocomotive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RailroadLocomotive.init({
    manufacturerId: DataTypes.UUID,
    locomotiveId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'RailroadLocomotive',
  });
  RailroadLocomotive.hasOne(Locomotive);
  RailroadLocomotive.hasOne(Railroad);
  return RailroadLocomotive;
};