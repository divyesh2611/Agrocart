const mongoose = require('mongoose');

const TransportationSchema = new mongoose.Schema({
    
    companyname:String,
    address:String, 
    city:String, 
    contactno:Number
});

const Transportation = new mongoose.model("uploadtransportation",TransportationSchema)

module.exports = Transportation;