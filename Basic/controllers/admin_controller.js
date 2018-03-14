const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const cryptoRanString = require('crypto-random-string');
const checkAuth = require('../auth/check-auth.js');

const User = require('../models/user.js');

router.get('/admin', function (req, res) {
    res.render("admin");
});

router.post('/adduser', checkAuth, (req, res) => {
    console.log(req.body);
    console.log(checkAuth);    

    bcrypt.genSalt(6, (err, salt) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
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
                    const newUser = new User({
                        type: "User",
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
                    newUser.save().then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: "Handling POST request to /api/registration. New User created",
                            createdRegistration: newUser
                        });
                    }).catch(error => {
                        catchError(error);
                    });
                }
            });
        }
    });
});

router.delete('/delete', (req,res,next) =>{
    console.log(req.body);
      
    User.findOneAndRemove({ email: req.body.email}).exec().then(result =>{
        console.log(result);
        
        res.status(200).json({
            message: " User was deleted"
        });
    }).catch(err =>{
       catchError(err);
    });    
});

router.post('/edituser', (req,res,next) => {
    User.findOneAndUpdate({email: req.body.email}).exec().then(result =>{
        console.log(result);
        
        res.status(200).json({
            message: " Selected user was updated"
        });        
    }).catch(err =>{
        catchError(err);
    });
});

function catchError(err) {
    console.log(err);
    res.status(500).json({
        error: err
    });
}

module.exports = router;