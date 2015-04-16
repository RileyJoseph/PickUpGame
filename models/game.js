"use strict";
var geocoder = require('geocoder');
module.exports = function(sequelize, DataTypes) {
  var game = sequelize.define("game", {
    sport: DataTypes.STRING,
    time: DataTypes.TIME,
    date: DataTypes.DATE,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    equipment: DataTypes.STRING,
    comments: DataTypes.TEXT,
    playerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.game.belongsTo(models.player)
      }
    }

  });
  return game;
};