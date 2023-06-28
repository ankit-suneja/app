const express = require ("express");
const { getAllUser, signup } = require("../controllers/user-controller");

const userRoutes= express.Router();

userRoutes.get("/", getAllUser)
userRoutes.post("/signup", signup)

module.exports= userRoutes;