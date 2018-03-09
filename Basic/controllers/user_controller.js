const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// const db = require('../models/user.js');

//Route to index page
router.get('/', function(req,res){
    res.render("index");
});

//Route to home page from login. Sends user JWT back to client to use for authentication
router.get('/home', function(req,res){
    res.render("home");
});


module.exports = router;