const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type:String,require:true},
    password:{type:String,require:true}
})

const User = mongoose.model("User",userSchema);

module.exports = User;