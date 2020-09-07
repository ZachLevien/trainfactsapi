'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RailroadLocomotives', {
      manufacturerId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: { model: 'Manufacturers', key: 'id' }
      },
      locomotiveId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: { model: 'Locomotives', key: 'id' }
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
    await queryInterface.dropTable('RailroadLocomotives');
  }
};