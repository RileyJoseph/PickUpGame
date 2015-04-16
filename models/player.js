"use strict";
var bcrypt = require('bcrypt');
var flash =require('connect-flash');

module.exports = function(sequelize, DataTypes) {
  var player = sequelize.define("player", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    favoriteSport: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8,200],
          msg: 'Password must be at least 8 characters long'
        }
      }
    }
  },
{
  hooks: {
      beforeCreate: function(player,options,sendback){
        bcrypt.hash(player.password,10,function(err,hash){
          if(err){ throw err; }
          player.password=hash;
          sendback(null,player);
        });
      }
  }
},
{
    classMethods: {
      associate: function(models) {
        models.player.hasMany(models.game)
      }
    }
});
  return player;
};