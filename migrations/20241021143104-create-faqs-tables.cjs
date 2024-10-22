'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('faqs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      question_ru: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      question_ro: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      question_en: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      answer_ru: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      answer_ro: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      answer_en: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('faqs');
  }
};
