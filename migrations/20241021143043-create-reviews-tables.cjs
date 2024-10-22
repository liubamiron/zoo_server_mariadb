'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
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
      rating: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('reviews');
  }
};
