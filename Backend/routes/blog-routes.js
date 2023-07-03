const express = require("express");
const { getAllBlog, addBlog, updateBlog, getById, deleteBlog } = require("../controllers/blog-controllers")

const blogRoutes = express.Router();

blogRoutes.get("/", getAllBlog);
blogRoutes.post("/add", addBlog);
blogRoutes.put("/update/:id", updateBlog)
blogRoutes.get("/:id", getById)
blogRoutes.delete("/:id", deleteBlog)

module.exports = blogRoutes; 