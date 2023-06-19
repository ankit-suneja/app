const express = require("express");
// import express from 'express';
const mongoose = require("mongoose");
// import mongoose from 'mongoose';
const router = require("./Backend/routes/user-routes.js")

// import router from './Backend/routes/user-routes.js';

const app = express()


mongoose.connect('mongodb+srv://admin:RwMZOP2HhrrHNmt9@cluster0.ghyejse.mongodb.net/')
    .then(()=>app.listen(5000))
    .then(()=>console.log("connected to databasse and listening on port 5000"))
    .catch((err)=>console.log(err))






//RwMZOP2HhrrHNmt9