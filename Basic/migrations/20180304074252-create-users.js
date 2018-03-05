'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_type: {
        type: Sequelize.STRING
      },
      manager_u_id: {
        type: Sequelize.STRING
      },
      user_u_id: {
        type: Sequelize.STRING
      },
      first_n: {
        type: Sequelize.STRING
      },
      last_n: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_num: {
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
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
    return queryInterface.dropTable('users');
  }
};