const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    role:String,
    username: String,
    email: String,
    city:String,
    district:String,
    state:String,
    country:String,
    pincode:Number,
    contactno:Number,
    adharno:Number,
    password:String

});

const User = new mongoose.model("User",UserSchema)

module.exports = User;

