'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('type_tenders', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_ru: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      name_ro: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      name_en: {
        type: Sequelize.STRING,
        unique: true,
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
    await queryInterface.createTable('tenders', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title_ru: { type: Sequelize.STRING, allowNull: true },
      title_ro: { type: Sequelize.STRING, allowNull: true },
      title_en: { type: Sequelize.STRING, allowNull: true },
      description_ru: { type: Sequelize.TEXT, allowNull: true },
      description_ro: { type: Sequelize.TEXT, allowNull: true },
      description_en: { type: Sequelize.TEXT, allowNull: true },
      pdf_file: { type: Sequelize.STRING },
      typeTenderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'type_tenders',
          key: 'id',
        },
        onUpdate: 'CASCADE',   // When the referenced type_tender is updated, the change cascades
        onDelete: 'CASCADE',   // When the referenced type_tender is deleted, the tender is deleted
      },
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tenders');
    await queryInterface.dropTable('type_tenders');
  }
};
