'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the User table
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      email: { type: Sequelize.STRING, unique: true },
      password: { type: Sequelize.STRING },
      role: { type: Sequelize.STRING, defaultValue: 'USER' },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');

  }
};
