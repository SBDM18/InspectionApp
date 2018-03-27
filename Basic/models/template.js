const mongoose = require('mongoose'); 

const templateSchema = mongoose.Schema({

    template_id: mongoose.Schema.Types.ObjectId,
    userType: String,
    man_Id: String,
    user_Id: String,
    title: String,
    entry: String,
    numentries: Number,
    bedroom: String,
    numbed: Number,
    bathroom: String,
    numbath: Number,
    halls: String,
    numhalls: Number,
    stairs: String,
    numstairs: Number,
    kitchen: String,
    numkitchen: Number,
    livingroom: String,
    numlr: Number
});


module.exports=mongoose.model('Templates', templateSchema);