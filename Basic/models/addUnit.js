const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



const unitScheme = mongoose.Schema({
    unit_id: String,
    user_U_id: String,
    type: String,
    street: String,
    city: String,
    state: String,
    zip: Number,
    unitNumber: String,
    storiesNumber: Number,
    bedroomTotal: Number,
    bathroomTotal: Number,
    yard: String,
    garage: Boolean
},[{timestamps:true},{_id:false}]);

// regSchema.plugin(uniqueValidator, {message: 'is already taken'});

// ObjectID = a serialized string that mongoose has built in that it will create (possible use for unit_id?)
//in these model files is where we can do validations through mongoose on the data that is being post to server

module.exports = mongoose.model('Units', unitScheme);
//          what we want to name it internally  :  and name of schema