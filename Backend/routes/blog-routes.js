const express = require("express");
const { getAllBlog, addBlog } = require("../controllers/blog-controllers")

const blogRoutes = express.Router();

blogRoutes.get("/", getAllBlog);
blogRoutes.post("/add", addBlog)

module.exports = blogRoutes; 