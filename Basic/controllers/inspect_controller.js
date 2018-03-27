const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');

const Inspect = require('../models/inspection.js')


router.get('/inspection/:authTok', function (req, res) {
    const user = req.params.authTok;
    res.render("inspection", { route: user });
});

router.get('/inspectdash/:authTok', function(req,res,next){
    const user = req.params.authTok;
    res.render('inspectDash',{route:user});
});


//information that is sent to be displayed in the atlas Db dashboard takes a little while

// need to create routes to navigate through the handlebar pages can add more detailed information to the routes later


module.exports = router;
