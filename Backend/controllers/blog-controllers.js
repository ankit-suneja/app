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

const addBlog = async(req, res, next)=>{
        const { title, description, image, user} = req.body;
        const blog= new Blog({
            title,
            description,
            image,
            user
        })
        try{
            await blog.save()

        }catch{(err)
        return console.log(err);
        }
        return res.status(200).json({blog})
}



module.exports = { getAllBlog, addBlog }