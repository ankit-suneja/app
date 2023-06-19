// import user from "../model/user";
const user = require("../model/user")

export const getAllUser= async(req, res, next)=>{
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