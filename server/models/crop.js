const mongoose = require('mongoose');

const CropSchema = new mongoose.Schema({
    
    cropname:String,
    username:String, 
   city:String, 
   cropQuantity:Number,
    cropDescription:String, 
    cropprice:Number,
    image:String

});

module.exports = mongoose.model("uploadcrop",CropSchema)
