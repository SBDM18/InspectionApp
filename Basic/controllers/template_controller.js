var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');


var template = require('../models/template.js');

router.get('/templates/:authTok',  function (req, res) {
    const user = req.params.authTok;
        res.render('template', { route: user });
});

router.post('/templates/:data', function(req, res){

    console.log('Data values from the modal', req.body);


    // const newTemp = new template({

    // })
    // //saves data to mongoose
    // newTemp.save().then(result => {
    //     console.log(result);
    //     res.status(201).json({
    //         message: "Handling POST request to /api/registration. New Manager created",
    //         createdRegistration: newReg
    //     });
    // }).catch(err => {
    //     catchError(err);
    // });
})

module.exports = router;