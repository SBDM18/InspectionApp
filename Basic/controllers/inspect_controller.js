const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const cryptoRandomString = require('crypto-random-string');
const db = require('../models');

router.get('/', function (req, res) {
    res.render("index");
});

// router.get('/inspection', function (req, res) {
//     res.render("inspect");
// });

router.post('/api/reg',function(req,res){
    authToken = cryptoRandomString(10);

    db.users.create({
        first_n: req.body.firstname,
        last_n: req.body.lastname,
        username: req.body.regUsername,
        password: req.body.regPass,
        company: req.body.company,
        email: req.body.email,
        phone_num: req.body.phone,
        manager_u_id: authToken,
    }).then(result =>{
        console.log("New registration of manager added to database");
        
    }).catch(err =>{
        res.json(err);
    });
});

router.post('/api/user', function(){
    db.user.findOne({
        where:{
            username:{
               [Op.like]: req.body.username 
            },
            password:{
                [Op.like]: req.body.password
            }
        }
    }).then(dbUser =>{
        res.json(dbUser);
        /*display the dashboard page (how will we do that when it is a page 
        created with jquery hide: maybe a function that has hide and show 
        and render onto the main page?);*/
    });
});