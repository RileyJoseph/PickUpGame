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

// router.get('/:id', function(req,res){
//   db.player.find({
//     where:{id:6},
//     include:[db.game]
//   }).then(function(user){
//       console.log("______________",user.name);
//       user.games.forEach(function(game){
//         db.game.find({where:{id:req.params.id}}).then(function(thegame){
//         console.log('...',game.sport);
//     // res.send(favs)
//     res.render("games/game",{game:game,thegame:thegame});
//       })
//     });
//     // console.log(game.get())
//   })
// });

router.get('/:id', function(req,res){
  db.game.find({
    where:{id:req.params.id},
    include:[db.player]
  }).then(function(games){
      console.log("__________",games.sport);
      // games.player(function(players){
      //   db.game.find({where:{id:req.params.id}}).then(function(thegame){
        // console.log('...',players.name);
    // res.send(players)
    res.render("games/game",{games:games,player:games.player});
      })
    // });
    // console.log(game.get())
  // })
});




module.exports = router;