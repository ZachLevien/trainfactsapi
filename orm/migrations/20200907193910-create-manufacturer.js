'use strict';

const { Manufacturer } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Manufacturers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      manufacturerName: {
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

    //seeding
    await Manufacturer.bulkCreate([
      { manufacturerName: 'Baldwin Locomotive Works', placeId: 'ChIJRw_KoavCxokRSJWzPP4cPr0', inOperationAt: new Date('1825-01-02'), outOperationAt: new Date('1956-12-31') },
      { manufacturerName: 'Electro-Motive Diesel (EMD)', placeId: 'ChIJnxUTqgVIDogRBv_QvAuepcs', inOperationAt: new Date('1922-08-24') },
    ]);
  },
  down: async (queryInterface, Sequelize) => {  
    await queryInterface.bulkDelete({
      tableName: 'Locomotives',
      options: {
        truncate: true,
        cascade: true
      }
    });
    await queryInterface.dropTable('Locomotives');
    await queryInterface.bulkDelete({
      tableName: 'Manufacturers',
      options: {
        truncate: true,
        cascade: true
      }
    });
    await queryInterface.dropTable('Manufacturers');
  }
};