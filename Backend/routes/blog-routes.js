const express = require("express");

const blogRoutes = express.Router();

blogRoutes.get=("/", getAllBlog)