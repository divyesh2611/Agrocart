const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    
   username:{
       type:String
   },
   crop:[
       {
           cropname:String,
           quantity:{
               type:String,
                default:1
           },

       },
   ],
   

},{timestamps:true});

module.exports = mongoose.model("cart",CartSchema)