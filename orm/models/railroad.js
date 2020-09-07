'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class railroad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  railroad.init({
    id:{
      allowNull: false,
      primaryKey: true,
      type: sequelize.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    railroadName: DataTypes.STRING,
    placeId: DataTypes.STRING,
    inOperationAt: DataTypes.DATEONLY,
    outOperationAt: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'railroad',
  });
  return railroad;
};