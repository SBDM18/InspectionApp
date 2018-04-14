const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../auth/check-auth.js');

const cryptoRanString = require('crypto-random-string');

const Unit = require('../models/addUnit.js');
const Template = require('../models/template.js');




//Route to unit page
router.get('/units/:authTok', (req, res) => {
    const user = req.params.authTok;
    console.log(user);

    Unit.find().where({
        manager_U_id: user
    }).exec().then(doc => {       

        var citiesFiltered = doc.reduce((accumalator, current) => {
            if (checkIfAlreadyExist(current)) {
                return accumalator;
            } else {
                return [...accumalator, current];
            }

            function checkIfAlreadyExist(currentVal) {
                return accumalator.some((item) => {
                    return (item.city === currentVal.city);
                });
            }
        }, []);

        var cityObj = {
            cities: citiesFiltered,
            route: user
        };
        console.log(cityObj);

        res.render("units", cityObj);
    }).catch((err) => {
        res.json(err);
    });
    // res.render("units");
});


router.get('/unitlist/:authTok/:city', (req, res) => {
    const user = req.params.authTok;
    const u_city = req.params.city;

    var replaced = u_city.split('+').join(' ');

    console.log('Here is the authTok');
    console.log(user);

    var resObj = {}

    Unit.find().where({ manager_U_id: user, city: replaced}).exec().then(unitDoc => {

        resObj.unit = unitDoc;

        Template.find().where({ man_Id: user }).exec().then(tempDoc => {
            console.log('Here is the templates', tempDoc);

            resObj.temp = tempDoc;

            console.log('Here is the listObj from unitlist');

            console.log(resObj);

            res.render("unitlist", resObj);
        })

    }).catch((err) => {
        catchError(err);
    });
});

router.get('/temp/:authTok/:unitID',(req,res)=>{
    const user = req.params.authTok;
    const unitID =req.params.unitID;
    console.log(user);
    console.log(unitID);

// <<<<<<< HEAD
// <<<<<<< HEAD
//     Template.find().where({manager_U_id:user}).then((temp) =>{
//         console.log("This is the temp doc",temp);
// =======
//     Template.find({}).exec().then((err,docs) =>{
//         console.log("this is the template ", docs);
// >>>>>>> 70b1e9ce907e498bea80e7b91ce12eac9c02d31a
// =======
    Template.find().where({ manager_U_id: user }).exec().then((err,docs) =>{
        console.log(docs);

        let tempObj = {
            temp: temp,
            route: user 
        };
        

        res.render("unitlist", tempObj);
    });
});

router.post('/addunit', checkAuth, (req, res) => {
    console.log("Token info ", req.userData);
    // console.log(req.body);
    // console.log("this is the address : ", req.body.street);
    // console.log("this is the unit # : ", req.body.unitNumber);
    let unitID = cryptoRanString(6);


    Unit.findOneAndUpdate({
            street: req.body.street
        }, // find a document with that filter
        {
            unit_id: unitID,
            user_U_id: req.userData.uID,
            manager_U_id: req.userData.manID,
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
        {
            upsert: true,
            new: true,
            runValidators: true
        }, // options
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


function catchError(err) {
    console.log(err);
    res.status(500).json({
        error: err
    });
}


module.exports = router;