const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');
const passport = require('passport');


router.get('/home',  function(req,res){
   console.log(req.user);
   console.log(req.isAuthenticated());
   
   
   res.render('home');


});
module.exports = router;
