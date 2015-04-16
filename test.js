// var express = require('express');
// var app = express();
// var fKey = process.env.FSQUARE_KEY
// var fSecret =process.env.FSQUARE_SECRET
// var request = require('request');

// var fourSq = process.env.FSQUARE_KEY;
// var fourSqSec = process.env.FSQUARE_SECRET;

// // var weatherUrl = 'https://george-vustrey-weather.p.mashape.com/api.php'

// app.get('/',function(req,res){
// var fourSqUrl = 'https://api.foursquare.com/v2/venues/search?client_id=' + fKey + '&client_secret=' + fSecret +'&v=20130815&ll=47.614848,-122.3359058&query=dogpark';
//   request(fourSqUrl,function(error,response,data) {
//     if(!error && response.statusCode === 200){
//       console.log(data);
//       var locations = JSON.parse(data);
//       console.log(locations.response)
//     } else{
//       console.log('error:',error,response.statusCode)
//     }
//   })
// });

// app.listen(3000);