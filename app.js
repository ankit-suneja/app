const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Backend/routes/user-routes.js");
const blogRoutes = require("./Backend/routes/blog-routes.js");

const app = express()
app.use(express.json())
app.use("/api/user", userRoutes)
app.use("/api/blogs", blogRoutes)


mongoose.connect('mongodb+srv://admin:RwMZOP2HhrrHNmt9@cluster0.ghyejse.mongodb.net/')
    .then(()=>app.listen(5000))
    .then(()=>console.log("connected to database and listening on port 5000"))
    .catch((err)=>console.log(err))






//RwMZOP2HhrrHNmt9