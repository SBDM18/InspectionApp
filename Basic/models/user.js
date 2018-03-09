const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = ('bcrypt');

//setting values for bcrypt to use
const saltRounds = 10,
      password = 's0/\/\P4$$w0rD',
      someOtherPlaintextPassword = 'not_bacon';

const registerSchema = mongooose.Schema({
   type: {type: "Admin"},
   firstName : {type: String,required: [true, "can't be blank"]},
   lastName: {type: String,required: [true, "can't be blank"]},
   username: {
      type: String,
      required: [true, "can't be blank"],
      lowercase: true,
      unique: true,
      match: [/^[a-zA-z0-9]+$/, 'is invalid'],
      index: true
   },
   hash: String,
   salt: String,
   company: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
      index: true
   },
   email: {
      type: String,
      required: [true, "can't be blank"],
      lowercase: true,
      unique:true,
      match: [/\s+@\s+\.\s+/, 'is invalid'],
      index: true
   },
   phoneNumber: { type: Number, required: true, unique: true },
   manager_U_id: mongoose.Schema.Types.ObjectId,
   user_U_id: mongoose.Schema.Types.ObjectId

},{timestamps:true});

registerSchema.plugin(uniqueValidator, {message: 'is already taken'});

registerSchema.methods.setPassword = function(password){
   this.salt = bcrypt.
};


module.exports = mongoose.model('Users', registerSchema);