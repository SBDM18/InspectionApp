const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');
const async = require('async');

const Template = require('../models/template.js');
const Unit = require('../models/addUnit.js');
const Inspect = require('../models/inspection.js');

const Fields = require("../models/fields.json");

let inspDoc = {};
let inspDash = {};
let completeList;
let incompleteList;
let inprogressList;
let inspect;
let complete;
let incomplete;
let inprogress;
let total;

router.get('/inspection/:authTok', function (req, res) {
    const user = req.params.authTok;
     let route = user;
    Inspect.find().where({
        manager_U_id: user
    }).exec().then(doc => {
        inspDoc.inspect = doc;
        let completeFiltered = doc.filter(element => {
            return element.status == "Completed";
        }).length;
        let inprogressFiltered = doc.filter(element => {
            return element.status == "In Progress";
        }).length;
        let incompleteFiltered = doc.filter(element => {
            return element.status == "In Complete";
        }).length;
        let total = (completeFiltered + inprogressFiltered + incompleteFiltered);
        inspDoc.complete = completeFiltered;
        inspDoc.incomplete = incompleteFiltered;
        inspDoc.inprogress = inprogressFiltered;
        inspDoc.total = total;
        inspDoc.route = user;
        //  console.log(inspDoc);
        res.render("inspection", inspDoc);

    }).catch(err => {
        catchError(err);
    });
});
//     async.series([function(callback){
//         Inspect.find().where({manager_U_id: user}).where({status: 'Completed'}).exec().then((err,comStat)=>{
//             console.log("This is complete status",comStat);
//             if(err) return callback(err);
//             completeList = comStat;
//             callback(null, comStat);            
//         })
//     },function(callback){
//         Inspect.find().where({ manager_U_id: user }).where({ status: "In Complete" }).exec().then((err, incomStat) => {
//             console.log(incomStat);
//             if (err) return callback(err);
//             incompleteList = incomStat;
//             callback(null, incomStat);
//         })
//     }, function(callback){
//         Inspect.find().where({ manager_U_id: user }).where({ status: "In Progress" }).exec().then((err, inproStat) => {
//             console.log(inproStat);
//             if (err) return callback(err);
//             inprogressList = inproStat;
//             callback(null, inproStat);
//         })
//     }, function(callback){
//         Inspect.find().where({manager_U_id:user}).exec().then(doc =>{
//             inspect = doc;

//             let completeFiltered = doc.filter(element => {
//                 return element.status == "Completed";
//             }).length;
//             let inprogressFiltered = doc.filter(element => {
//                 return element.status == "In Progress";
//             }).length;
//             let incompleteFiltered = doc.filter(element => {
//                 return element.status == "In Complete";
//             }).length;
//             let total = (completeFiltered + inprogressFiltered + incompleteFiltered);
//             complete = completeFiltered;
//             incomplete = incompleteFiltered;
//             inprogress = inprogressFiltered;
//             total = total;
//         })
//     }
//     ],function(err){ 
//         let inspDoc = {
//              completeList: completeList,incompleteList: incompleteList,inprogressList: inprogressList,
//             inspect: inspect, complete: complete,incomplete: incomplete,inprogress: inprogress,
//              total: total,route: route     
//            }      
//         console.log(err);
//         console.log("this is inspect doc:", inspDoc);
        
        
//         res.render("inspection", inspDoc);       
//     });
// });

router.get('/inspectdash/:authTok/:status', function (req, res) {
    let status_u = req.params.status;
    let user = req.params.authTok;
    console.log("This is the status ", status_u);
    console.log("This is the user", user);
    
    // let inspections = {};
    Inspect.find().where({manager_U_id: user}).exec().then(stat => {
        // console.log("This is status array",stat);
        
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
        unitDoc.bed

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
router.get('/inspectstart/:authTok/', (req, res) => {
    res.render('inspect');
});



function catchError(err) {
    console.log(err);
    res.status(500).json({
        error: err
    });
}
//information that is sent to be displayed in the atlas Db dashboard takes a little while

// need to create routes to navigate through the handlebar pages can add more detailed information to the routes later

// router.post('/inspectinfo', checkAuth, (req, res, next) => {
//     const newInspect = new Inspect({
//         unit_id: "1243dsxv",
//         manager_U_id: req.userData.manID,
//         user_U_id: req.userData.uID,
//         status: "Completed",
//         street: "3668 Quimby st.",
//         city: "San Diego",
//         state: "CA",
//         created: new Date().toLocaleString('en-US',{weekday:'short',year:'numeric',month:'short',day:'numeric',hour:'numeric',minute:'numeric'})
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