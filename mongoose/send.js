const mongoose = require('mongoose')


const shcemas =  mongoose.Schema({
    string : {
        type : String,
    },
    number : {
        type : Number,
        default : 100
    }
})

const one = mongoose.model("models", shcemas)

module.exports= one
