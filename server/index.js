const express = require('express');
const connectToMongo = require('./db');
var cors = require('cors');
var mongoose = require('mongoose');
const { route } = require('./routes/register');
const router = express.Router();
//import res from "express/lib/response"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

connectToMongo()

//routes


app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))
app.use('/uploadcrop', require('./routes/uploadcrop'))
//app.use('/modifyProfile', require('./routes/modifyProfile'))
app.listen(9002,()=>{
    console.log("BE started at port 9002")
})

