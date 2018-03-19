const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');

const cryptoRanString = require('crypto-random-string');

const Unit = require('../models/addUnit.js');

//Route to unit page
<<<<<<< HEAD
router.get('/units',  function (req, res) {
=======
router.get('/units', function (req, res) {
>>>>>>> cc3979ec79d009d13b3d52afbaeb3e02e3055468

    Unit.find().where({ manager_U_id: "123456" }).exec().then(doc =>{
        var cityObj ={
            cities: doc
        };     
        res.render("units", cityObj);
    }).catch((err)=>{
        res.json(err);
    });    
    // res.render("units");
});
router.get('/units/unitlist', (req,res) =>{
   
    
    Unit.find().where({manager_U_id:"123456", city: "San Diego"}).exec().then(doc =>{
        let listObj ={
            units: doc
        };
        console.log(listObj);
        
        res.render("units", listObj );
    }).catch((err)=>{
        catchError(err);
    });
})

router.post('/addunit', checkAuth, (req, res) => {
    console.log("Token info " , req.userData);
    // console.log(req.body);
    // console.log("this is the address : ", req.body.street);
    // console.log("this is the unit # : ", req.body.unitNumber);
    let unitID = cryptoRanString(6);   
    

   Unit.findOneAndUpdate(
        { street: req.body.street }, // find a document with that filter
       {
           unit_id: unitID, 
           user_U_id: req.userData.uID,
           manager_U_id:req.userData.manID,
           type: req.body.type,
           street: req.body.street,
           city: req.body.city,
           state: req.body.state,
           zip: req.body.zip,
           unitNumber: req.body.unitNumber,
           storiesNumber: req.body.storiesNumber,
           bedroomTotal: req.body.bedroomTotal,
           bathroomTotal: req.body.bathroomTotal,
           yard: req.body.yard,
           garage: req.body.garage
       },
         // document to insert when nothing was found
        { upsert: true, new: true, runValidators: true }, // options
        function (err, doc) { // callback
            if (err) {                
                // handle error
                res.json(err);
            } else {
                // handle document
                console.log(doc);
                res.json(doc);
            }
        }
    ); 
});

// router.post('/addunit', (req,res) =>{
//     console.log(req.body);
//     let street = req.body.street;
//     let unitNum = req.body.unitNumber;
//     console.log("this is the address : " ,req.body.street);
//     console.log("this is the unit # : ", req.body.unitNumber);

//     newUnit.find().where({street: req.body.street,unitNumber: req.body.unitNumber}).exec().then(unit =>{
//         console.log(unit);
//         console.log("this is street :", unit[1].street);
//         console.log("this is unit# :", unit[1].unitNumber);
//         if(unit.street <1 && unit.unitNumber<1){
//             return res.status(401).json({
//                 message: "Street and unit already exists"
//             });
//         }   
    
//         const unitID = cryptoRanString(6);
//         const addNewUnit = new newUnit({
//             unit_id: unitID,
//             user_U_id: "grab data from database",
//             type: req.body.type,
//             street: req.body.street,
//             city: req.body.city,
//             state: req.body.state,
//             zip: req.body.zip,
//             unitNumber: req.body.unitNumber,
//             storiesNumber: req.body.storiesNumber,
//             bedroomTotal: req.body.bedroomTotal,
//             bathroomTotal: req.body.bathroomTotal,
//             yard: req.body.yard,
//             garage: req.body.garage
//         });

//         addNewUnit.save().then(result =>{
//             console.log(result);        
//         }).catch(err => console.log(err));
//         res.status(201).json({
//             message: "Handling POST request to /addunit",
//             createdNewUnit: addNewUnit
//         });
//     });
// });

function catchError(err) {
    console.log(err);
    res.status(500).json({
        error: err
    });
}


module.exports = router;