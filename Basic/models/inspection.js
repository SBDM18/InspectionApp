const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



const inspectScheme = mongoose.Schema({
    unit_id: String,
    manager_U_id: String,
    user_U_id: String,
    status: String,
    street: String,
    city: String,
    state: String,
    created: String
}, [{ timestamps:true }, { _id:false }]);

// regSchema.plugin(uniqueValidator, {message: 'is already taken'});

// ObjectID = a serialized string that mongoose has built in that it will create (possible use for unit_id?)
//in these model files is where we can do validations through mongoose on the data that is being post to server

module.exports = mongoose.model('Inspections', inspectScheme);