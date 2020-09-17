'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Railroad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Railroad.init({
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    railroadName: DataTypes.STRING,
    placeId: DataTypes.STRING,
    inOperationAt: DataTypes.DATEONLY,
    outOperationAt: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Railroad',
  });
  return Railroad;
};