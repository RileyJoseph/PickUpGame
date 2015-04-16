var express = require('express');
var router = express.Router();
var db = require('../models');
var bcrypt = require('bcrypt');

router.get('/login',function(req,res){
  // if(req.getPlayer()){
  //   res.render('games/index');
  // }else{
    res.render('auth/login');
  });
// });



router.get('/signup',function(req,res){
    res.render('auth/signup');
});


//POST /login
//process login data and login user
router.post('/login',function(req,res){
    db.player.find({where:{email:req.body.email}})
    .then(function(user){
        if(user){
            //check password
            bcrypt.compare(req.body.password,user.password,function(err,result){
                if(err) throw err;

                if(result){
                  console.log(req.session)
                    //store user to session!!
                    req.session.user={
                        id:user.id,
                        email:user.email,
                        name:user.name
                    };
                    req.flash('success','You have been logged in.');
                    res.redirect('/');
                }else{
                  console.log('else 1')
                    // req.flash('danger','Invalid password.');
                    res.redirect('/auth/login');
                }
            })
        }else{
            req.flash('danger','Unknown user. Please sign up.');
            res.redirect('/auth/login');
        }
    })
    //do login here (check password and set session value)

    //user is logged in forward them to the home page
    // res.redirect('/');
});



//post signup
router.post('/signup',function(req,res){

    var userQuery={email:req.body.email};
    var userData={
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        city:req.body.city,
        favoriteSport:req.body.favoriteSport
    };

    db.player.findOrCreate({where:userQuery,defaults:userData})
    .spread(function(user,created){
        if(created){
            req.flash('success','New user created.');
            req.session.user={
                        id:user.id,
                        email:user.email,
                        name:user.name
            };
            res.redirect('/auth/login');
        }else{
            req.flash('danger','e-mail already exists.');
            res.redirect('/auth/signup');
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
        res.redirect('/auth/signup');
    })


    //do sign up here (add user to database)
    // res.send(req.body);
    //user is signed up forward them to the home page
    // res.redirect('/');
});




module.exports = router;