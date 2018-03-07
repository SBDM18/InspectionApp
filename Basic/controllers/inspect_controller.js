var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var Op = sequelize.Op;


//Route for the login/reg page
router.get('/', function(req,res){
    res.render("index");
});



module.exports = router;