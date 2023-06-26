
const user = require("../model/user")

const getAllUser= async(req, res, next)=>{
    let users;
    try{
        users = await user.find();
    }
    catch (err){
        console.log(err)
    }
    if (!users){
        return res.status(400).json({message : "users not found"})
    }
    return res.status(200).json({users});
}

module.exports= getAllUser