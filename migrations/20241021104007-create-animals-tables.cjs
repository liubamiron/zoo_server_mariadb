'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create the Animals table
    await queryInterface.createTable('animals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_ru: { type: Sequelize.STRING, allowNull: true },
      name_ro: { type: Sequelize.STRING, allowNull: true },
      name_en: { type: Sequelize.STRING, allowNull: true },
      descr_short_ru: { type: Sequelize.TEXT, allowNull: true },
      descr_short_ro: { type: Sequelize.TEXT, allowNull: true },
      descr_short_en: { type: Sequelize.TEXT, allowNull: true },
      descr_long_ru: { type: Sequelize.TEXT, allowNull: true },
      descr_long_ro: { type: Sequelize.TEXT, allowNull: true },
      descr_long_en: { type: Sequelize.TEXT, allowNull: true },
      habitat_ru: { type: Sequelize.TEXT, allowNull: true },
      habitat_ro: { type: Sequelize.TEXT, allowNull: true },
      habitat_en: { type: Sequelize.TEXT, allowNull: true },
      general_info_ru: { type: Sequelize.TEXT, allowNull: true },
      general_info_ro: { type: Sequelize.TEXT, allowNull: true },
      general_info_en: { type: Sequelize.TEXT, allowNull: true },
      nutrition_ru: { type: Sequelize.TEXT, allowNull: true },
      nutrition_ro: { type: Sequelize.TEXT, allowNull: true },
      nutrition_en: { type: Sequelize.TEXT, allowNull: true },
      protection_ru: { type: Sequelize.TEXT, allowNull: true },
      protection_ro: { type: Sequelize.TEXT, allowNull: true },
      protection_en: { type: Sequelize.TEXT, allowNull: true },
      facts_ru: { type: Sequelize.TEXT, allowNull: true },
      facts_ro: { type: Sequelize.TEXT, allowNull: true },
      facts_en: { type: Sequelize.TEXT, allowNull: true },
      family_ru: { type: Sequelize.TEXT, allowNull: true },
      family_ro: { type: Sequelize.TEXT, allowNull: true },
      family_en: { type: Sequelize.TEXT, allowNull: true },
      genus_ru: { type: Sequelize.TEXT, allowNull: true },
      genus_ro: { type: Sequelize.TEXT, allowNull: true },
      genus_en: { type: Sequelize.TEXT, allowNull: true },
      phylum_ru: { type: Sequelize.TEXT, allowNull: true },
      phylum_ro: { type: Sequelize.TEXT, allowNull: true },
      phylum_en: { type: Sequelize.TEXT, allowNull: true },
      clas_ru: { type: Sequelize.TEXT, allowNull: true },
      clas_ro: { type: Sequelize.TEXT, allowNull: true },
      clas_en: { type: Sequelize.TEXT, allowNull: true },
      domain_ru: { type: Sequelize.STRING, allowNull: true },
      domain_ro: { type: Sequelize.STRING, allowNull: true },
      domain_en: { type: Sequelize.STRING, allowNull: true },
      karyotype_ru: { type: Sequelize.STRING, allowNull: true },
      karyotype_ro: { type: Sequelize.STRING, allowNull: true },
      karyotype_en: { type: Sequelize.STRING, allowNull: true },
      habitat_long_ru: { type: Sequelize.TEXT, allowNull: true },
      habitat_long_ro: { type: Sequelize.TEXT, allowNull: true },
      habitat_long_en: { type: Sequelize.TEXT, allowNull: true },
      new_animal: { type: Sequelize.BOOLEAN, defaultValue: false },
      disappearing: { type: Sequelize.BOOLEAN, defaultValue: false },
      img_1: { type: Sequelize.STRING, allowNull: true },
      img_2: { type: Sequelize.STRING, allowNull: true },
      img_3: { type: Sequelize.STRING, allowNull: true },
      img_4: { type: Sequelize.STRING, allowNull: true },
      conservation_ru: { type: Sequelize.TEXT, allowNull: true },
      conservation_ro: { type: Sequelize.TEXT, allowNull: true },
      conservation_en: { type: Sequelize.TEXT, allowNull: true },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

    // Create the Types table
    await queryInterface.createTable('types', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_ru: { type: Sequelize.STRING, unique: true, allowNull: true },
      name_ro: { type: Sequelize.STRING, unique: true, allowNull: true },
      name_en: { type: Sequelize.STRING, unique: true, allowNull: true },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });

    // Create the Type_Animals table (junction table)
    await queryInterface.createTable('type_animals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'types',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      animalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'animals',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('type_animals');
    await queryInterface.dropTable('types');
    await queryInterface.dropTable('animals');
  }
};
