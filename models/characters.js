'use strict';
module.exports = (sequelize, DataTypes) => {
  var characters = sequelize.define('characters', {
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    class: DataTypes.STRING
  }, {});
  characters.associate = function(models) {
    // associations can be defined here
  };
  return characters;
};