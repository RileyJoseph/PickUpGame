var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var request = require('request');
// var geocoder = require('geocoder');
var db = require('../models');
var env = process.env.NODE_ENV || "development";
router.use(bodyParser.urlencoded({extended:false}));


// router.get("/",function(req,res){
//   // console.log(location);
//   res.render("games/index");
// })



router.get('/',function(req,res){
  var query =req.query.q
  var url = 'https://api.foursquare.com/v2/venues/search?client_id=' + 'CJ3HMZQV1XDZ4TL33UFP1KJROPG5Y5XOA0B3XACH22BMYFNV' + "&client_secret=" + 'HY4ISDROTPENA4CS4ADMEQETRIEM4UKDSJHQIVHD3S1YROGF' + "&v=20130815&ll=47.614848,-122.3359058&query=" + query + ' park';
  request(url,function(error,response,data){
    if(!error && response.statusCode == 200){
      // console.log(venues);
      var locations = JSON.parse(data);
      var venues = locations.response;
      // var loc = venues.venues;
          console.log("test");
          // console.log(venues);
          console.log(req.body.sport)
      // console.log(venues);
      res.render("parks",venues);
    }
  })
})
router.post('/index',function(req,res){
  console.log('starting here');

    var url='https://api.foursquare.com/v2/venues/'+req.body.park;
    var apiData={
      client_id:process.env.FSQUARE_KEY,
      client_secret:process.env.FSQUARE_SECRET,
      v:'20130815'
    }

    request({url:url,qs:apiData},function(error,response,data){
      if(!error && response.statusCode == 200){
        // console.log(venues);
        var locations = JSON.parse(data);
        var venues = locations.response;
        // res.send(venue);
        // res.send(venues)
    db.game.findOrCreate({where:{sport:req.body.sport,
      time:req.body.time,
      date:req.body.date,
      equipment:req.body.equipment,
      comments:req.body.comments,
      lat:venues.venue.location.lat,
      lng:venues.venue.location.lng,
      // playerId: req.session.user.id
    }})
    .spread(function(user,created){
        if(created){
            req.flash('success','New game created.');
            res.redirect('/maps');
        }else{
            req.flash('danger','Null Fields');
            res.redirect('/park');
        }

    }).catch(function(error){
        //NOT COVERED IN CLASS
        //handle validation errors and create flash
        //messages
        if(error){
            if(Array.isArray(error.errors)){
                error.errors.forEach(function(errorItem){
                    req.flash('danger',errorItem.message);
                });
            }else{
                req.flash('danger','unknown error');
                console.log('unknown error',error);
            }
        }else{
            req.flash('danger','unknown error');
            console.log('error, but no error...');
        }
        // res.redirect('/maps');
    })
      }else{
        console.log("here_____________________?")
        res.send({error:error,response:response});
      }
    }) //end of request
});//end of post



    // var locations = JSON.parse(data);

    // var venues = locations.response;
    // var loc = venues.venues;
    //   loc.forEach(function(send){
    // //       console.log("test");
    //       console.log(send.location.lat);
    //     }),



module.exports = router;