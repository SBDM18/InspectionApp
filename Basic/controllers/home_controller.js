const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');


router.get('/home',  function(req,res){
    
   res.render('home');


});
module.exports = router;
