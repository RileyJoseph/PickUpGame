var bodyParser = require('body-parser');
var express = require('express');
var flash = require('connect-flash');
var session = require("express-session");
var env = process.env.NODE_ENV || "development";
var mapsCtrl = require("./controllers/maps");
var authCtrl = require("./controllers/auth");
var gamesCtrl = require("./controllers/games");
var parksCtrl = require("./controllers/parks");
var app = express();
var request = require('request');
var geocoder = require('geocoder');
var db = require('./models');

app.set("view engine", "ejs");

//3rd party middleware
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret:'qwertyuiopasdfghjkl',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

app.use(function(req,res,next){
  req.getUser = function(){
    return req.session.user || false;
  }
  next();
});


// app.get("/", function(req,res){
//   // res.send("hello world!")
//   // res.render("index");
// });



//controllers
app.use("/auth", authCtrl);
app.use("/maps", mapsCtrl);
app.use("/games", gamesCtrl);
app.use("/parks", parksCtrl);


app.get("/",function(req,res){
  var user = req.getUser();
  console.log("user",user)
  res.render("index",{user:user});
})


app.get('/about',function(req,res){
  res.render('about/index');
});

app.listen(process.env.PORT || 3000)
// window.onload = loadScript;