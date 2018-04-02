const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');
const async = require('async');

const Template = require('../models/template.js');
const Unit = require('../models/addUnit.js');
const Inspect = require('../models/inspection.js');

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
    Inspect.find({manager_U_id: user
    }).exec().then(stat => {
        // console.log("This is status array",stat);
        
        inspDoc.status = stat;
    });
    console.log(inspDoc);
    res.render('inspectDash', inspDoc);
});

router.get('/inspect/:authTok', function(req, res) {
    const user = req.params.authTok;
    // const u_city = req.params.city;

    console.log('hitting this endpoint');

    // var replaced = u_city.split('+').join(' ');
    console.log(user);
    // console.log(u_city);

    var resObj = {}

    resObj.route = user;

    Unit.find().where({ manager_U_id: user }).exec().then(unitDoc => {

        resObj.unit = unitDoc;

        Template.find({}).then(tempDoc => {
            resObj.temp = tempDoc;
            res.render('inspect', resObj)
        })
    }).catch((err) => {
        catchError(err);
    });

    // res.render('inspect', resObj)

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