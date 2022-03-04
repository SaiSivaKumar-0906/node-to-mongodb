 const mongoose = require('mongoose')


 const schema = new mongoose.Schema({
 record : { type:String, required:true},
 date : { type:Number, required:true},
 })

const put = mongoose.model('schema', schema)

 module.exports.schema=put;

