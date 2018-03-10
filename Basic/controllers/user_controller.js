const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const newManager = require('../models/user.js');

//Route to index page
router.get('/', function(req,res){
    res.render("index");
});

router.post('/registration', (req,res) => {
    console.log(req.body);
    
    //mongoose post request to the schema model user.js
    const newReg = new newManager({
        type:"Admin",
        manager_U_id: new mongoose.Types.ObjectId(),
        user_U_id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        company: req.body.company,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    }); 
    //saves data to mongoose
    newReg.save().then(result =>{
        console.log(result);        
    }).catch(err => console.log(err));
    res.status(201).json({
        message: "Handling POSt request to /registration",
        createdRegistration: newReg
    });
});

//Route to home page from login. Sends user JWT back to client to use for authentication
router.get('/home', function(req,res){
    
    res.render("home", req);
});


module.exports = router;