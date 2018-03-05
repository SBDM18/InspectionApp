var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var Op = sequelize.Op;
var db = require('../models');


//Route for the login/reg page
router.get('/', function(req,res){
    res.render("index");
});

//havent decided to use multiple pages for ajax calls will have to ask wes a question on 
//how to handle ajax calls that point to the same page but different jquery information loaded up

//Route to login and verify/ check that user is correct and valid
router.post('/login', function (req,res)  {
   db.User.findOne({
       where:{
           username:{
               [Op.like]: req.body.username
           },
           password: {
               [Op.like]: req.body.password
           }
       }
   }).then(function(dbUser) {
        res.json(dbUser);
        //render the dashboard page after the login is successful
   }).catch(function(err){
       //write code to prompt the user to try again but not specifiy if username/password is wrong
       //create a counter to check the amount of tries an indivdual tried to login
   });

});

router.post('/api/registration', function (req,res)  {
    //what type of securitization with a generated token used to conceal the data?
    db.users.create({
       first_name: req.body.firstname,
       last_name: req.body.lastname,
       user_name: req.body.regUsername,
       user_password: req.body.regUsername,
       email: req.body.email,
       phone_num: req.body.phone,
       company: req.body.company,
       name: "Manager",
       manager_u_id: ""/*not decided how to implemen the securitization token to store this unique id data*/,
       user_u_id: ""/*same issue as the manage_u_id*/,
    });
});

//this is a route for planned admin page where manager can add users general information username and passwords to be use
//Will need a check on the ajax call to verify that the manager has not gone over the limit of the amount of users allowed and prompt them to get a new subscription plan
router.post('/api/newuserreg', function (req,res) {
    db.users.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        user_name: req.body.regUsername,
        user_password: req.body.regUsername,
        email: req.body.email,
        phone_num: req.body.phone,
        company: req.body.company,
        name: "User",
        manager_u_id: ""/*not decided how to implemen the securitization token to store this unique id data*/,
        user_u_id: ""/*same issue as the manage_u_id*/,
    });
});

module.exports = router;