
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

const signup = async(req, res, next)=>{
    const {name, email, password} = req.body
    
    let existingUser;
    try {
        existingUser= await user.findOne({email})

    }catch(err){
    console.log(err);
    }
    if (existingUser){
        return res.status(400).json({message: "user already exists! Login instead"})

    }
    const user= new User({
        name,
        email,
        password
    });

    try{
        await user.save();

    }catch(err){
        console.log(err);
    }
    return res.status(201).json({user})
}













module.exports= signup
module.exports= getAllUser