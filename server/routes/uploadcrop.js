const { Router } = require('express');
const e = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Crop = require('../models/crop');


// app.get("/",(req,res) => {
//     res.send("My API login")
// })

// router.get("/",(req,res) => {
//     res.send("addcrop")
// })
// router.get('/:id/', async (req, res) => {
//     // id = "61f2b4e2ac3689e63399f9f8";
//     let crop = await Crop.findOne({ _id: req.params.id.toString() });
//     if (crop) {
//         // console.log(question);
//         res.json(crop);
//     }
//     else {
//         res.json("error in fatching question")
//     }
// })

// router.get("/",function(req,res){
//     Crop.find().then((data)=>{
//         res.json(data)
//     })
// })
// router.de("/:id/",function(req,res){
//     Crop.findOne({_id: req.params.id}).then((data)=>{
//         res.json(data)
//     })
// })
router.post("/",(req,res) => {
    //res.send("register")
    const {logo,cropname, username, city, cropQuantity, cropDescription, cropprice } =req.body
    console.log(JSON.stringify({logo,cropname, username, city, cropQuantity, cropDescription, cropprice}))
    const crop = new Crop({
        cropname:cropname,
         username:username, 
        city:city, 
        logo:logo,
        cropQuantity:cropQuantity,
         cropDescription:cropDescription, 
         cropprice:cropprice
    })
    crop.save(async(err) => {
        if(err){
            console.log(err)
            res.send( err)
        }else{
            
            res.send( {message : "Successfully"})
        }
    })
    
           
})

module.exports = router