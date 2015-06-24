var express = require('express');
var router = express.Router();
var request = require('request');
var geocoder = require('geocoder');
var db = require('../models');
var bcrypt = require('bcrypt')



router.get("/",function(req,res){
  var user = req.getUser();
  db.game.findAll().then(function(favs){
    // console.log(favs[0]);
    console.log("NEW CONSOLE LOG", favs)
    res.render("maps/index", {favs:favs});
  console.log(user);
  })
});





module.exports = router;