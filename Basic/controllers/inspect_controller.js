const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');

const Template = require('../models/template.js');
const Unit = require('../models/addUnit.js');
const Inspect = require('../models/inspection.js');

const Fields = require("../models/fields.json");

let inspDoc = {};


router.get('/inspection/:authTok', function (req, res) {
    const user = req.params.authTok;
   
    
    inspDoc.route = user;

    Inspect.find().where({manager_U_id: user}).exec().then(doc=>{
        inspDoc.inspect = doc;

        let completeFiltered = doc.filter(element =>{
            return element.status == "Completed";
        }).length;
        let inprogressFiltered = doc.filter(element =>{
            return element.status == "In Progress";
        }).length;
        let incompleteFiltered = doc.filter(element =>{
            return element.status == "In Complete";
        }).length;

        // console.log("In pRogress",inprogressFiltered);
        // console.log("in complete",incompleteFiltered);
        // console.log("complete",completeFiltered);
        
        inspDoc.complete = completeFiltered;
        inspDoc.incomplete = incompleteFiltered;
        inspDoc.inprogress = inprogressFiltered;
        //  console.log(inspDoc);
        

        res.render("inspection",  inspDoc);

    }).catch(err=>{
        catchError(err);
    });
});

router.get('/inspectdash/:status', function(req,res){
    let status_u = req.params.status;
    console.log("This is the status ", status_u);
    // let inspections = {};
    Inspect.find().where({status: `${status_u}`}).exec().then(stat =>{
        inspDoc.status = stat;
    });
    console.log(inspDoc);
    res.render('inspectDash', inspDoc); 
});

router.get('/inspect/:authTok', function(req, res) {
    const user = req.params.authTok;

    var resObj = {};

    resObj.route = user;

    Unit.find().where({ manager_U_id: user }).exec().then(unitDoc => {

        resObj.unit = unitDoc;

        let btnObj = {
            sections : []
        };

        //garage, yard, bath and bed
        // depending on data from units we grab the number of bedrooms/baths etc...
        // this data goes to the field 

        if (unitDoc[0].bathroomTotal > 1) {
            let obj = {}
                for (let i = 1; i <= unitDoc[0].bathroomTotal; i++){
                    let bath = "bathroom";
                    bath += i;
                    let fields = {
                        "walls": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "ceiling": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "doors": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "flooring": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "baseboards": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "lights": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "power outlets": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "cabinets": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "towel rack": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "countertop": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "shower door": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "shower": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "mirror": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "sink": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "faucet": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "exhaust fan": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "toilet": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                },
                        "toilet tissue dispenser": {
                            "clean": null,
                            "undamaged": null,
                            "working": null
                                }
                        }
                    obj[bath] = fields;
                }
                    btnObj.sections.push(obj);
        }
        
        Template.find({man_Id: user}).then(tempDoc => {
            resObj.temp = tempDoc;
            //depending on what the template has we exclude what we 
            //don't need from the fields or include multiples
            resObj.fields = Fields;
            console.log(resObj.fields);
            res.render('inspect', resObj)
        })
    }).catch((err) => {
        catchError(err);
    });
})

// 



function catchError(err) {
    console.log(err);
    res.status(500).json({
        error: err
    });
}
//information that is sent to be displayed in the atlas Db dashboard takes a little while

// need to create routes to navigate through the handlebar pages can add more detailed information to the routes later

// router.post('/inspectinfo', checkAuth, (req, res, next) => {
//     const newInspect = new inspect({
//         unit_id: "1243dsxv",
//         manager_U_id: req.userData.manID,
//         user_U_id: req.userData.uID,
//         status: "In Progress",
//         street: "3668 Quimby st.",
//         city: "San Diego",
//         state: "CA",
//         created: new Date()
//     });
//     newInspect.save().then(result =>{
//         console.log(result);
//         res.status(201).json({
//             message: "New inspection created",
//             createdInspection: newInspect
//         });        
//     }).catch(err =>{
//         catchError(err);
//     });

// });


module.exports = router;


