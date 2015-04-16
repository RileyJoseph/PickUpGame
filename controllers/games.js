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


// router.get('/', function(req,res){
//     res.render("games/game");
// })


// router.get('/',function(req,res){
//   console.log('Getting here?')
//   var query =req.query.q
//   var url = 'https://api.foursquare.com/v2/venues/search?client_id=' + 'CJ3HMZQV1XDZ4TL33UFP1KJROPG5Y5XOA0B3XACH22BMYFNV' + "&client_secret=" + 'HY4ISDROTPENA4CS4ADMEQETRIEM4UKDSJHQIVHD3S1YROGF' + "&v=20130815&ll=47.614848,-122.3359058&query=" + 'volunteer' + ' park';
//   request(url,function(error,response,data){
//     if(!error && response.statusCode == 200){
//       var locations = JSON.parse(data);
//       console.log(venues);
//       var venues = locations.response;
//       console.log(venues);
//       res.send(venues);
//     }
//   })
// })

// router.post('/index',function(req,res){

//     var player={sport:req.body.sport};
//     var playerData={
//         sport:req.body.sport,
//         time:req.body.time,
//         park:req.body.park,
//         date:req.body.date,
//         eqipment:req.body.equipment,
//         comments:req.body.comments
//     };

//     db.game.findOrCreate({where:player,defaults:userData})
//     .spread(function(user,created){
//         if(created){
//             req.flash('success','New user created. Please login.');
//             res.redirect('/auth/login');
//         }else{
//             req.flash('danger','e-mail already exists.');
//             res.redirect('/auth/signup');
//         }

//     }).catch(function(error){
//         //NOT COVERED IN CLASS
//         //handle validation errors and create flash
//         //messages
//         if(error){
//             if(Array.isArray(error.errors)){
//                 error.errors.forEach(function(errorItem){
//                     req.flash('danger',errorItem.message);
//                 });
//             }else{
//                 req.flash('danger','unknown error');
//                 console.log('unknown error',error);
//             }
//         }else{
//             req.flash('danger','unknown error');
//             console.log('error, but no error...');
//         }
//         res.redirect('/auth/signup');
//     })


//     //do sign up here (add user to database)
//     // res.send(req.body);
//     //user is signed up forward them to the home page
//     // res.redirect('/');
// });



module.exports = router;