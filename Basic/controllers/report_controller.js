const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');


router.get('/reports', function(req,res){
    res.render("reports");
});



module.exports = router;