var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');


var template = require('../models/template.js');

router.get('/templates', /*checkAuth,*/ function (req, res) {
    res.render('template');
});


router.post('/templates', function(req, res){

    console.log("This is the req.body");
    
    console.log(req.body);
    
})


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


module.exports = router;