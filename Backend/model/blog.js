const mongoose = require("mongoose")

const schema =  mongoose.Schema;

const blogSchema= new schema({
    title:{
        type: String,
        required: true

    },
    description:{
        type: String,
        required: true

    },
    image:{
        type: String,
        required: true

    }
})

module.exports= mongoose.model("Blog", blogSchema)