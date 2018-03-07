<<<<<<< HEAD
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
=======
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
//mongoose example

const AddUnit = require('../models/addUnit.js')

//information that is sent to be displayed in the atlas Db dashboard takes a little while

//Route for the login/reg page
router.get('/', function(req,res){
    res.render("index");
    //example of using mongoose for a get request
    AddUnit.findById(id).exec().then(doc =>{
        console.log("From database: "+ doc);        
        res.status(200).json(doc);
    }).catch(err => {
            console.log(err);
            res.status(500).json({error: err});
    });
    //send response inside the then bloc or/and send response in catch bloc for error
});
router.post('/'){
    //example for using mongoose for a post request
    const addunit = new AddUnit({
        unit_id: new mongoose.Types.ObjectId(),

    });
    // save()saves the data using mongoose 
    addunit.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
}

// need to create routes to navigate through the handlebar pages can add more detailed information to the routes later


module.exports = router;
>>>>>>> 7908ded1daa3802d4c1fd1a7b29673e85d46e302
