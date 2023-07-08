const Blog = require("../model/blog");
const { default: mongoose } = require("mongoose");
const User = require("../model/user");


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

const addBlog = async(req, res, next)=>{
        const { title, description, image, user} = req.body;
        let existingUser;
        try{
            existingUser= await User.findById(user)
        }catch(err){
            console.log(err);
        }
        if(!existingUser){
            return res.status(500).json({message:"unable to find user by this id"})
        }
        const blog= new Blog({
            title,
            description,
            image,
            user
        })
        try{
            const session = await mongoose.startSession();
            session.startTransaction();
            await blog.save({session});
            existingUser.blogs.push(blog);
            await existingUser.save({session});
            await session.commitTransaction();           

        }catch(err){
        console.log(err);
        return res.status(500).json({message:err})
        }
        return res.status(200).json({blog})
}
const updateBlog = async(req, res, next)=>{
    const {title, description}= req.body
    const BlogId = req.params.id 
    let blog;
    try{
        blog = await Blog.findByIdAndUpdate(BlogId, {
            title,
            description
        })
    }catch(err){
    return console.log(err);
}
if(!blog){
    return res.status(500).json({message:"unable to update blog"})
}return res.status(200).json({blog})
}

const getById = async(req, res, next)=>{
    const id = req.params.id
    let blog;
    try{ 
        blog = await Blog.findById(id);

    }catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(400).json({message: "blog not found"})
    }return res.status(200).json({blog})
}

const deleteBlog = async(req, res, next)=>{
    const id = req.params.id;
    let blog;
    try{
        blog= await Blog.findByIdAndRemove(id).populate("user");
        await blog.user.blogs.pull(blog);
        blog.user.save()
    }catch(err){
        console.log(err);
    }
    if(!blog){
        return res.status(500).json({message:"unable to delete blog"})
    }
    return res.status(200).json({message:"successfully deleted blog"})

    
}

const getByUserId = async(req, res, next)=>{
    const userId = req.params.id;
    let UserBlog;
    try{
        UserBlog = await User.findById(userId).populate("blog")

    }catch(err){
       return console.log(err);
    }
    if(!UserBlog){
        return res.status(404).json({message: "No Blog by this id"})
    }
    return res.status(200).json({blogs:UserBlog})
}



module.exports = { getAllBlog, addBlog, updateBlog, getById, deleteBlog, getByUserId }