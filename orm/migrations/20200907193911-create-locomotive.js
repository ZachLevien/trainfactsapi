'use strict';

const { Locomotive, Manufacturer } = require('../models');

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
      modelNumber: {
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

    const baldwin = await Manufacturer.findOne({ where: { manufacturerName: 'Baldwin Locomotive Works' }});

    await Locomotive.bulkCreate([
      { 
        locomotiveName: 'Roger E. Broggie', 
        modelNumber: 'Ten Wheeler (4-6-0)',
        manufacturerId: baldwin.id,
        inServiceAt: new Date('1925-01-02')
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    
  }
};