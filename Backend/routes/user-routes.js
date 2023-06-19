const express = require ("express");
// import { Express } from "express";
const  getAllUser  = require("../controllers/user-controller");

const router= express.router();

router.get("/", getAllUser)

module.exports= router;