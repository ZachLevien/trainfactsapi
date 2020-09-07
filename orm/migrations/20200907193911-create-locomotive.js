'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locomotives', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      locomotiveName: {
        type: Sequelize.STRING
      },
      manufacturerId: {
        type: Sequelize.UUID,
        references: { model: 'Manufacturers', key: 'id' }
      },
      inServiceAt: {
        type: Sequelize.DATEONLY
      },
      outServiceAt: {
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
    await queryInterface.dropTable('Locomotives');
  }
};