const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const newUnit = require('../models/addUnit.js');

//Route to unit page
router.get('/units', function (req, res) {
    res.render("units");
});

router.post('/addunit', (req,res) =>{
    const addNewUnit = new newUnit({
        unit_id: new mongoose.Types.ObjectId(),
        user_U_id: "grab data from database",
        type: req.body.type,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
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



module.exports = router;