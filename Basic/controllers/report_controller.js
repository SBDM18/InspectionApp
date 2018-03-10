const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/reports', function(req,res){
    res.render("reports");
});



module.exports = router;