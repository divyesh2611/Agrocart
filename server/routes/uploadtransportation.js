const { Router } = require('express');
const e = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Transportation = require('../models/transportation');

router.post("/",(req,res) => {
    //res.send("register")
    const {companyname, address, city,contactno  } =req.body
    console.log(JSON.stringify({companyname, address, city,contactno}))
    const transportation = new Transportation({
        companyname:companyname,
        address:address,
        city:city,
        contactno:contactno  
         
    })
    transportation.save(async(err) => {
        if(err){
            console.log(err)
            res.send( err)
        }else{
            
            res.send( {message : "Successfully"})
        }
    })
    
           
})


module.exports = router