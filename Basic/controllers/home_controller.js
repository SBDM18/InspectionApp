const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');


router.get('/home/:authTok',  (req,res) =>{
    let userRoute = req.params.authTok;
    console.log(userRoute);

   res.render('home', {route: userRoute});

});

module.exports = router;
