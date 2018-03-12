const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = ('bcrypt');


const regSchema = mongoose.Schema({
   type: String,
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
   password: {type: String, required: true},
   company: {
      type: String,
      required: [true, "can't be blank"],
   },
   email: {
      type: String,
      required: [true, "can't be blank"],
      lowercase: true,
      unique:true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true
   },
   phoneNumber: { type: Number, required: true, unique: true },
   manager_U_id: mongoose.Schema.Types.ObjectId,
   user_U_id: mongoose.Schema.Types.ObjectId

},{timestamps:true},{_id:false});

 regSchema.plugin(uniqueValidator, {message: 'is already taken'});



// regSchema.methods.generateHash = function(password){
//       return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
// };
// regSchema.methods.validPassword = function(password){
//       return bcrypt.compareSync(password, this.password)
// };

module.exports = mongoose.model('Users', regSchema);