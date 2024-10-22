'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('activities_items', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title_ru: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      title_ro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      title_en: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      short_description_ru: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      short_description_ro: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      short_description_en: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      long_description_ru: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      long_description_ro: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      long_description_en: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      img_1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      img_2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('activities_items ');
  }
};
