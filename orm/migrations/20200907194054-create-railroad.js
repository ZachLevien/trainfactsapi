'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Railroads', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      railroadName: {
        type: Sequelize.STRING
      },
      placeId: {
        type: Sequelize.STRING
      },
      inOperationAt: {
        type: Sequelize.DATEONLY
      },
      outOperationAt: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Railroads');
  }
};