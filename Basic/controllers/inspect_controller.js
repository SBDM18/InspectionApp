const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');

<<<<<<< HEAD
const Inspect = require('../models/inspection.js')
=======
const Template = require('../models/template.js')
const Unit = require('../models/addUnit.js')
// const template = require('../models/inspection.js')
>>>>>>> matt


router.get('/inspection/:authTok', function (req, res) {
    const user = req.params.authTok;
    res.render("inspection", { route: user });
});

<<<<<<< HEAD
router.get('/inspectdash/:authTok', function(req,res,next){
    const user = req.params.authTok;
    res.render('inspectDash',{route:user});
});
=======
router.get('/inspect/:authTok/:city', function(req, res) {
    const user = req.params.authTok;
    const u_city = req.params.city;

    var replaced = u_city.split('+').join(' ');
    console.log(user);
    console.log(u_city);

    var resObj = {}

    resObj.route = user;

    Template.find({}).then(tempDoc => {
        resObj.temp = tempDoc;
    })

    Unit.find().where({ manager_U_id: user, city: replaced }).exec().then(unitDoc => {

        resObj.unit = unitDoc;

        console.log('Here is the listObj from unitlist');

        console.log(resObj);

        // res.render('inspect', resObj)
    }).catch((err) => {
        catchError(err);
    });

})

>>>>>>> matt


//information that is sent to be displayed in the atlas Db dashboard takes a little while

// need to create routes to navigate through the handlebar pages can add more detailed information to the routes later


module.exports = router;
