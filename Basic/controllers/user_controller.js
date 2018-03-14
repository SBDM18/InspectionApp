const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const cryptoRanString = require('crypto-random-string');
const jwt = require('jsonwebtoken');

const newManager = require('../models/user.js');





//Route to index page
router.get('/', function(req,res){
    res.render("index");
});

router.post('/register', (req,res) => {
    console.log(req.body);    
    
    bcrypt.genSalt(6, (err,salt) =>{
        if(err){
            return res.status(500).json({
                error:err
            });
        }else{
            // console.log(req.body.password);
            
            bcrypt.hash(req.body.password, salt, null, (err, hash) => {
                console.log("bcrypt has hashed password");
                
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user_ID = cryptoRanString(10);
                    const man_ID = cryptoRanString(10);
                    const newReg = new newManager({
                        type: "Admin",
                        manager_U_id: man_ID,
                        user_U_id: user_ID,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        username: req.body.username,
                        password: hash,
                        company: req.body.company,
                        email: req.body.email,
                        phoneNumber: req.body.phoneNumber
                    });
                        //saves data to mongoose
                    newReg.save().then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: "Handling POST request to /api/registration. New Manager created",
                            createdRegistration: newReg
                        });
                    }).catch(err => {
                       catchError(err);
                    });
                }
            });   
        }    
    }); 
});

//Route to home page from login. Sends user JWT back to client to use for authentication
router.post('/login', (req,res,next) => {
    console.log(req.body.userpass);
    console.log(req.body);
    let name = req.body.username;
    
    
    newManager.findOne({ username: name}).exec().then(user => {
        console.log(user);
        // console.log( user.userpass);
        // console.log("password inptted in", req.body.userpass);
        if(user.length < 1){
            return res.status(401).json({
                message: 'Auth failed'
            });           
        }        
        bcrypt.compare(req.body.userpass, user.userpass, (err,result) => {
            if(err){
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            if(result){
               const token = jwt.sign({
                    email: user.email,
                    userId: user.user_U_id,
                    type: user.type,
                    username: user.username
                }, process.env.JWT_Key,
                //define the options
                {
                    expiresIn: "1h"
                }
                );
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
                window.location('/home');
            }
            res.status(401).json({
                message: 'Auth failed'
            });
            alert("Invalid entry please try again");
        });
    }).catch(err =>{
        catchError(err);
    });
});
 

function catchError(err){
    console.log(err);
    res.status(500).json({
        error: err
    });
}

module.exports = router;