// const mongoose = require("mongoose")
import mongoose from "mongoose";

const schema =  mongoose.schema;

const userSchema= newSchema({
    name:{
        type: String,
        required : true

    }, 
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
});

export default mongoose.model("User", userSchema);