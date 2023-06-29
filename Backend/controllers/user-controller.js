const User = require("../model/user")
const bcrypt = require("bcryptjs")


 const getAllUser= async(req, res, next)=>{
    let users;
    try{
        users = await User.find();
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
        existingUser= await User.findOne({email})
    }catch(err){
    return console.log(err);
    }
    if (existingUser){
        return res.status(400).json({message: "user already exists! Login instead"})

    }
    const hashedPassword = bcrypt.hashSync(password)
    const newUser= new User({
        name,
        email,
        password: hashedPassword
    });

    try{
        await newUser.save();

    }catch(err){
        return console.log(err);
    }
    return res.status(201).json({newUser})
}

const login = async(req, res, next)=>{
    const {email, password} = req.body
    let existingUser;
    try {
        existingUser= await User.findOne({email})
    }catch(err){
    return console.log(err);
    }
    if (!existingUser){
        return res.status(404).json({message: "couldn't find user by this email"})

    }

    const isPasswordCorrect= bcrypt.compareSync(password, existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Incorrect password"})
    }
    return res.status(200).json({message: "Login Succesful!"})

}




module.exports = { signup, getAllUser, login };