const mongoose = require('mongoose');

const CropSchema = new mongoose.Schema({
    
    cropname:String,
    username:String, 
   city:String, 
   cropQuantity:Number,
    cropDescription:String, 
    cropprice:Number,
    image:String,
});

// CropSchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });
// CropSchema.set('toJSON', {
//     virtuals: true,
// });

module.exports = mongoose.model("uploadcrop",CropSchema)
