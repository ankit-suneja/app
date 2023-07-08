const express = require("express");
const { getAllBlog, addBlog, updateBlog, getById, deleteBlog, getByUserId } = require("../controllers/blog-controllers")

const blogRoutes = express.Router();

blogRoutes.get("/", getAllBlog);
blogRoutes.post("/add", addBlog);
blogRoutes.put("/update/:id", updateBlog)
blogRoutes.get("/:id", getById)
blogRoutes.delete("/:id", deleteBlog)
blogRoutes.get("/user/:id", getByUserId)

module.exports = blogRoutes; 