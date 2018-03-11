const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const newManager = require('../models/user.js');

//Route to index page
router.get('/', function(req,res){
    res.render("index");
});

router.post('/api/register', (req,res) => {
    bcrypt.genSalt(10, (err,salt) =>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }else{
            bcrypt.hash(req.body.password, salt, null, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const newReg = new newManager({
                        type: "Admin",
                        manager_U_id: new mongoose.Types.ObjectId(),
                        user_U_id: new mongoose.Types.ObjectId(),
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
                        })
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
    newManager.findOne({ username: req.body.username}).exec().then(user => {
        console.log(user);
        console.log("Password from database", user.password);
        console.log("password inptted in", req.body.password);
        if(user.length < 1){
            return res.status(401).json({
                message: 'Auth failed'
            });           
        }        
        bcrypt.compare(req.body.password, user.password, (err,result) => {
            if(err){
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            if(result){
               const token = jwt.sign({
                    email: user.email,
                    userId: user.user_U_id
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
            }
            res.status(401).json({
                message: 'Auth failed'
            });
        });
    }).catch(err =>{
        catchError(err);
    });
});
 

function catchError(err){
    console.log(err);
    res.status(500).json({
        error: err
    })
}

module.exports = router;