const express = require ("express");
const { getAllUser, signup, login } = require("../controllers/user-controller");

const userRoutes= express.Router();

userRoutes.get("/", getAllUser);
userRoutes.post("/signup", signup);
userRoutes.post("/login", login)

module.exports= userRoutes;