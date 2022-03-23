const express = require('express');
const connectToMong = require('./db');
var cors = require('cors');
var mongoose = require('mongoose');
const { route } = require('./routes/register');
const router = express.Router();
const path = require('path')

const app = express()
app.use(express.json())
app.use(express.urlencoded())


connectToMong()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.setHeader("Cross-Origin-Resource-Policy","cross-origin");

    next();
});
app.use('/public/images', express.static(path.join("public", "images")));

//routes
/*/api_path && (./file_path) */

app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))
app.use('/uploadcrop', require('./routes/uploadcrop'))
app.use('/uploadtransportation', require('./routes/uploadtransportation'))

app.listen(9002,()=>{
    console.log("BE started at port 9002")
})




//import res from "express/lib/response"
// app.use(cors());
// app.options("*", cors());


//app.use('/users', require('./routes/register'))
//app.use('/modifyProfile', require('./routes/modifyProfile'))