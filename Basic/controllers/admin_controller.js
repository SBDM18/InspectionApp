const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const cryptoRanString = require('crypto-random-string');
const checkAuth = require('../auth/check-auth.js');

const User = require('../models/user.js');

router.get('/admin', (req, res , next) =>{
    const user = req.params.authTok;     

     User.find().where({
         manager_U_id: "013c1b5521"
     }).exec().then(doc => {
         doc.shift();
        //  console.log(doc);         
          let userList = {
             users: doc
          };         
          console.log(userList);
          

         res.render('admin', { route: user, userList});

     }).catch(err => {
         catchError(err);
     });    
});

router.post('/adduser', checkAuth, (req, res) => {
    console.log(req.userData.manID);
    console.log(req.userData.type);        

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
                    const user_ID = cryptoRanString(6);
                    const newUser = new User({
                        type: "User",
                        manager_U_id: req.userData.manID,
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

router.delete('/delete', checkAuth, (req,res,next) =>{
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

router.post('/edituser', checkAuth, (req,res,next) => {
    console.log(req.body);
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
                    User.findOneAndUpdate({ email: req.body.email },
                        {
                            type: "User",
                            manager_U_id: "have to grab from manager database",
                            user_U_id: "grab from database",
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            username: req.body.username,
                            password: hash,
                            company: req.body.company,
                            email: req.body.email,
                            phoneNumber: req.body.phoneNumber
                        },
                        { upsert: true, new: true, runValidators: true },
                        (err, doc) => {
                            if (err) {
                                alert(" Was not able to update specified user");
                            } else {
                                alert("User specified was updated");
                                console.log(doc);
                                res.json(doc);
                            }
                        }
                    );
                }
            });
        }
    });    
});

function catchError(err) {
    console.log(err);
    res.status(500).json({
        error: err
    });
}


module.exports = router;