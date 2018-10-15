"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("races", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      speed: {
        type: Sequelize.INTEGER
      },
      abilityBonus: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      alignment: {
        type: Sequelize.TEXT
      },
      age: {
        type: Sequelize.TEXT
      },
      sizeDescription: {
        type: Sequelize.TEXT
      },
      racialProficiencies: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      languages: {
        type: Sequelize.TEXT
      },
      traits: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      subraces: {
        type: Sequelize.ARRAY(Sequelize.JSON)
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
    return queryInterface.dropTable("races");
  }
};
