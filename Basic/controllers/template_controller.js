var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');


var Template = require('../models/template.js');

router.get('/templates/:authTok', function (req, res) {
    const user = req.params.authTok.toString();

    Template.find().where({ man_Id: user }).exec().then(doc => {

        var tempObj = {
            templates: doc,
            route: user
        };

        res.render("template", tempObj);
    }).catch((err) => {
        res.json(err);
    });    
});

router.post('/templates/:authTok', checkAuth, function(req, res){

    const man = req.params.authTok;
    const user = req.userData.uID;
    const type = req.userData.type;
    const newTemplate = new Template({
        userType: type,
        man_Id: man,
        user_Id: user,
        title: req.body.title,
        entry: req.body.entry,
        numentries: req.body.numentries,
        bedroom: req.body.bedroom,
        numbed: req.body.numbed,
        bathroom: req.body.bathroom,
        numbath: req.body.numbath,
        halls: req.body.halls,
        numhalls: req.body.numhalls,
        stairs: req.body.stairs,
        numstairs: req.body.numstairs,
        kitchen: req.body.kitchen,
        numkitchen: req.body.numkitchen,
        livingroom: req.body.livingroom,
        numlr: req.body.numlr
    });

    //saves data to mongoose
    newTemplate.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling POST request to /api/registration. New Template created",
            createdTemplate: newTemplate
        });
    }).catch(err => {
        catchError(err);
    });


});

router.get('/templist/:authTok', function (req, res) {
    const user = req.params.authTok;
    Template.find().where({ manager_U_id: user }).exec().then(doc => {
        var tempObj = {
            templates: doc,
            route: user
        };
        res.render("template", tempObj);
    }).catch((err) => {
        res.json(err);
    }); 
});


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