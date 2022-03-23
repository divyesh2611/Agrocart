const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

router.post("/",(req,res)=>{
    const { role,email , password } =req.body
    // console.log(role)
   // const navigate = useNavigate();
    User.findOne({email:email,role:role},(err,user) => {
        // console.log(role)
        if(user){
            if ((password,user.password) && role==user.role){
                
                   //jwt
                const accessToken = jwt.sign({
                    id:user._id
                },process.env.JWT_SEC,
                {expiresIn:"3d"});
                //res.send(accessToken)

                const {password, ...other} =user._doc

                res.send({message:"Login Sucessfull",user:other,accessToken})
                //if(bcrypt.compareSync(password,user.passowrd))
             
                
            }else
            {
                res.send({message:"password didn't match "})
            }
        }
        else if (err)
        {
            res.send(err)
        }
        else{
            res.send( {message : "User not registered"})
        }
    })
    console.log(req.body);
})



module.exports = router