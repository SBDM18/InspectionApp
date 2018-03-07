var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
//mongoose example

const AddUnit = require('../models/addUnit.js')

//information that is sent to be displayed in the atlas Db dashboard takes a little while

//Route for the login/reg page
router.get('/', function(req,res){
   const id = req.params.unit_id;
    //example of using mongoose for a get request
    AddUnit.findById(id).exec().then(doc =>{
        console.log("From database: ", doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json("No valid entry for provided ID");
        }
        res.status(200).json(doc);
    }).catch(err => {
            console.log(err);
            res.status(500).json({error: err});
    });
    //send response inside the then bloc or/and send response in catch bloc for error
});
router.post('/'){
    //example for using mongoose for a post request
    const addunit = new AddUnit({
        unit_id: new mongoose.Types.ObjectId(),

    });
    // save()saves the data using mongoose 
    addunit.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
}

// need to create routes to navigate through the handlebar pages can add more detailed information to the routes later


module.exports = router;
