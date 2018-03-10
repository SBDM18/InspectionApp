const mongoose = require('mongoose');

const unitScheme = mongoose.Schema({
    unit_id: mongoose.Schema.Types.ObjectId,
    name: String
});

// ObjectID = a serialized string that mongoose has built in that it will create (possible use for unit_id?)
//in these model files is where we can do validations through mongoose on the data that is being post to server

module.exports = mongoose.model('units', unitScheme);
//          what we want to name it internally  :  and name of schema