const express = require("express");
const mongoose = require("mongoose");
const router = require("./Backend/routes/user-routes.js")
// const getAllUser= require("./Backend/controllers/user-controller.js")

const app = express()

app.use("/api/user", router)


mongoose.connect('mongodb+srv://admin:RwMZOP2HhrrHNmt9@cluster0.ghyejse.mongodb.net/')
    .then(()=>app.listen(5000))
    .then(()=>console.log("connected to databasse and listening on port 5000"))
    .catch((err)=>console.log(err))






//RwMZOP2HhrrHNmt9