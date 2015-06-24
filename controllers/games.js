var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var request = require('request');
// var geocoder = require('geocoder');
var db = require('../models');
var env = process.env.NODE_ENV || "development";
router.use(bodyParser.urlencoded({extended:false}));


router.get("/",function(req,res){
  // console.log(location);
  res.render("games/index");
})


router.get('/:id', function(req,res){
  console.log("here")
  db.game.find({
    where:{id:req.params.id},
    include:[db.player]
  }).then(function(games){
      // console.log("__________",games.sport);
    console.log("NEW CONSOLE LOG",games)
    res.render("games/game",{games:games,player:games.player});
      })
    // });
  // })
});




module.exports = router;