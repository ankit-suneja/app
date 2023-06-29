const express = require("express");
const { getAllBlog } = require("../controllers/blog-controllers")

const blogRoutes = express.Router();

blogRoutes.get("/", getAllBlog);

module.exports = blogRoutes; 