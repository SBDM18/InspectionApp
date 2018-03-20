const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');


router.get('/reports/:authTok',  function(req,res){
    const user = req.params.authTok;
    res.render("reports", { route: user } );
});



module.exports = router;