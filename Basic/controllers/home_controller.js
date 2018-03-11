var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/home', function(req,res){
   res.render('home');
});

module.exports = router;