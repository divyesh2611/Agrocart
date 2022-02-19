const { Router } = require('express');
const e = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

// app.get("/",(req,res) => {
//     res.send("My API login")
// })

router.get("/",(req,res) => {
    res.send("register")
})

router.post("/",(req,res) => {
    //res.send("register")
    const {role,username, email, city, district, state, country, pincode, contactno,adharno, password} =req.body
    console.log(JSON.stringify({role,username, email, city, district, state, country, pincode, contactno,adharno, password}))
    
    User.findOne({username:username},(err,user) => {
        if(user){
            res.send({isUser:true,message:"User already Registered"})

        }
        else if (err)
        {
            res.send(err)
        }
        else{
            const user= new User({
                role:role,
                username:username ,
                email:email ,
                city:city,
                district:district,
                state:state,
                country:country,
                pincode:pincode,
                contactno:contactno,
                adharno:adharno,
                password:password
            })
            user.save(async(err) => {
                if(err){
                    console.log(err)
                    res.send( err)
                }else{
                    
                    res.send( {isUser:false, message : "Successfully Registered , Please Login Now"})
                }
            })
            
        }
    })

})





module.exports = router