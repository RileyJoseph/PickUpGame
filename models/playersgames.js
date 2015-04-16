"use strict";
module.exports = function(sequelize, DataTypes) {
  var playersgames = sequelize.define("playersgames", {
    playerId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return playersgames;
};