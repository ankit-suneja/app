const Blog = require("../model/blog")

const getAllBlog = async(req, res, next)=>{
    let blogs;
    try{
        blogs = await Blog.find()

    } 
    catch(err){
        return console.log(err)
    }
    if(!blogs){
        return res.status(400).json({message: "Blog not found"})
    }
    return res.status(200).json({blogs})
}

module.exports = { getAllBlog }