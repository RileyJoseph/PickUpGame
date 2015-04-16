"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("games", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sport: {
        type: DataTypes.STRING
      },
      time: {
        type: DataTypes.TIME
      },
      date: {
        type: DataTypes.DATE
      },
      lat: {
        type: DataTypes.FLOAT
      },
      lng: {
        type: DataTypes.FLOAT
      },
      equipment: {
        type: DataTypes.STRING
      },
      comments: {
        type: DataTypes.TEXT
      },
      playerId: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("games").done(done);
  }
};