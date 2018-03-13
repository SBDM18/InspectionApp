const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');

const cryptoRanString = require('crypto-random-string');

const newUnit = require('../models/addUnit.js');

//Route to unit page
router.get('/units', function (req, res) {
    res.render("units");
});



router.post('/addunit', checkAuth, (req, res) => {
    console.log(req.body);
    let street = req.body.street;
    let unitNum = req.body.unitNumber;
    console.log("this is the address : ", req.body.street);
    console.log("this is the unit # : ", req.body.unitNumber);

   newUnit.findOneAndUpdate(
        { street: req.body.street }, // find a document with that filter
       {
           unit_id: "1", 
           user_U_id: "grab data from database",
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

router.post('/addunit', (req,res) =>{
    console.log(req.body);
    let street = req.body.street;
    let unitNum = req.body.unitNumber;
    console.log("this is the address : " ,req.body.street);
    console.log("this is the unit # : ", req.body.unitNumber);

    newUnit.find().where({street: req.body.street,unitNumber: req.body.unitNumber}).exec().then(unit =>{
        console.log(unit);
        console.log("this is street :", unit[1].street);
        console.log("this is unit# :", unit[1].unitNumber);
        if(unit.street <1 && unit.unitNumber<1){
            return res.status(401).json({
                message: "Street and unit already exists"
            });
        }   
    
        const unitID = cryptoRanString(6);
        const addNewUnit = new newUnit({
            unit_id: unitID,
            user_U_id: "grab data from database",
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
        });

        addNewUnit.save().then(result =>{
            console.log(result);        
        }).catch(err => console.log(err));
        res.status(201).json({
            message: "Handling POST request to /addunit",
            createdNewUnit: addNewUnit
        });
    });
});



module.exports = router;