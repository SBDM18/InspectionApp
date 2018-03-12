const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user.js');

router.get('/admin', function (req, res) {
    res.render("admin");
});

router.delete('/delete/:userid', (req,res,next) =>{
    User.remove({ _id: req.params.id}).exec().then(result =>{
        res.status(200).json({
            message: " User was deleted"
        })
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
});
module.exports = router;