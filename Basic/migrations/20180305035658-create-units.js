'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unit_u_id: {
        type: Sequelize.STRING
      },
      manager_u_id: {
        type: Sequelize.STRING
      },
      user_u_id: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.INTEGER
      },
      unit_num: {
        type: Sequelize.INTEGER
      },
      stories_num: {
        type: Sequelize.INTEGER
      },
      bed: {
        type: Sequelize.INTEGER
      },
      bath: {
        type: Sequelize.INTEGER
      },
      garage: {
        type: Sequelize.BOOLEAN
      },
      yard: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('units');
  }
};