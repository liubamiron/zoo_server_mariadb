'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('home_pages', {
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
      title1_ru: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      title1_ro: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      title1_en: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      description1_ru: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      description1_ro: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      description1_en: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      img_3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('home_pages');
  }
};
