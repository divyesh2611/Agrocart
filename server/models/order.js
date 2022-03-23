const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    
   username:String,
   crop:[
       {
           cropname:String,
           quantity:{
               type:String,
                default:1
           },

       },
   ],
   amount:{
    type:Number,
    required:true
   },
   staus:{
    type:String,
    default:"pending"
   },
   address:String
   

},{timestamps:true});

module.exports = mongoose.model("order",OrderSchema)