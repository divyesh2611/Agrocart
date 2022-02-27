const mongoose = require('mongoose');

const CropSchema = new mongoose.Schema({
    
    cropname:String,
    username:String, 
   city:String, 
   cropQuantity:Number,
    cropDescription:String, 
    cropprice:Number,
    logo:String

});

const Crop = new mongoose.model("uploadcrop",CropSchema)

module.exports = Crop;