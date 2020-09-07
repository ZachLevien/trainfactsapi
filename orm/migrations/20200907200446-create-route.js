'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      routeName: {
        type: Sequelize.STRING
      },
      railroadId: {
        type: Sequelize.UUID,
        references: { model: 'Railroads', key: 'id' }
      },
      distance: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Routes');
  }
};