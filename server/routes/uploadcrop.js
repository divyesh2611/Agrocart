const { Router } = require('express');
const e = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Crop = require('../models/crop');
const multer =require('multer')

// app.get("/",(req,res) => {
//     res.send("My API login")
// })

// router.get("/",(req,res) => {
//     res.send("addcrop")
// })
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const fileFilter=(req, file, cb)=>{
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
        cb(null,true);
    }else{
        cb(null, false);
    }
  
   }
  
 var upload = multer({ 
     storage:storage,
     limits:{
         fileSize: 1024 * 1024 * 5
     },
    //  fileFilter:fileFilter
  });


////////////////////


router.get("/", function (req, res) {
    Crop.find().then((data) => {
        res.json(data)
    })
})

router.get('/:id', async (req, res) => {

    let crop = await Crop.find({ username: req.params.id.toString() });
    if (crop) {
        // console.log(question);
        res.json(crop);
        console.log(crop)
    }
    else {
        res.json("error in fatching crop")
    }
})
// router.de("/:id/",function(req,res){
//     Crop.findOne({_id: req.params.id}).then((data)=>{
//         res.json(data)
//     })
// })
router.post("/",upload.single('image'), (req, res) => {
    //res.send("register")

    const {cropname, username, city, cropQuantity, cropDescription, cropprice } = req.body
    const image = req.file ? req.file.filename : null;
    console.log(JSON.stringify({image,cropname, username, city, cropQuantity, cropDescription, cropprice }))
    

    const crop = new Crop({
        cropname: cropname,
        username: username,
        city: city,
        image: image,
        cropQuantity: cropQuantity,
        cropDescription: cropDescription,
        cropprice: cropprice,
    })
    crop.save(async (err) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {

            res.send({ message: "Successfully" })
        }
    })


})

module.exports = router