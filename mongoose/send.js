const mongoose = require('mongoose')


const shcemas =  mongoose.Schema({
    record : {
        type : JSON,
    },
    number : {
        type : Number,
        required : true,
        default : Date.now(),
    },
},{ collection : "my-first-database"});

const one = mongoose.model("modelz", shcemas)

module.exports= one
