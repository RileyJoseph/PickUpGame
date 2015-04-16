"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("players", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      favoriteSport: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
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
    migration.dropTable("players").done(done);
  }
};