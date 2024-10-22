'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title_ru: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      title_ro: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      title_en: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      time_event: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      start_date_event: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      end_date_event: {
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
      img: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};
