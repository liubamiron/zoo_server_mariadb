'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Create post table
    await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_ru: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name_ro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name_en: {
        type: Sequelize.STRING,
        allowNull: true,
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
      popular: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    // Create tag table
    await queryInterface.createTable('tags', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_ru: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name_ro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name_en: {
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
    // Create TagPost table (many-to-many relationship between posts and tags)
    await queryInterface.createTable('tag_posts', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      tagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tags',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
    await queryInterface.dropTable('tags');
    await queryInterface.dropTable('tag_posts');
  }
};
