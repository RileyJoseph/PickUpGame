var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var request = require('request');
var geocoder = require('geocoder');
var db = require('../models');
var bcrypt = require('bcrypt')


router.use(bodyParser.urlencoded({extended:false}));


router.get("/",function(req,res){
  db.game.findAll().then(function(favs){
    console.log(favs[0]);
    res.render("maps/index", {favs:favs});
  })
});

router.get('../games', function(req,res){
// var gameNum = req.params.id;
//   db.game.find({where: {id: req.params.id}}).then(function(favs){
//     if (game !== null)
//           gameNum.game = true;
//         else {
//           gameNum.game = false;
//         }
//       res.render("games/game", {favs:favs});
//       })
// }
// })
res.render("/games/game");
})


// var fKey = process.env.FSQUARE_KEY
// var fSecret = process.env.FSQUARE_SECRET


// router.get("/",function(req,res){
//   db.game.findAll().then(function(location){
//   console.log(location);
//   res.render("maps/index", {location:location});
// })
// });




module.exports = router;