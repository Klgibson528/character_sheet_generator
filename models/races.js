'use strict';
module.exports = (sequelize, DataTypes) => {
  var races = sequelize.define('races', {
    name: DataTypes.STRING,
    speed: DataTypes.INTEGER,
    abilityBonus: DataTypes.ARRAY(DataTypes.INTEGER),
    alignment: DataTypes.TEXT,
    age: DataTypes.TEXT,
    sizeDescription: DataTypes.TEXT,
    racialProficiencies: DataTypes.ARRAY(DataTypes.JSON),
    languages: DataTypes.TEXT,
    traits: DataTypes.ARRAY(DataTypes.JSON),
    subraces: DataTypes.ARRAY(DataTypes.JSON)
  }, {});
  races.associate = function(models) {
    // associations can be defined here
  };
  return races;
};