 const mongoose = require('mongoose')


 const schema = new mongoose.Schema({
 record : { type:String, required:true},
 date : { type:Number, default:96}
 })

const put = mongoose.model('schema', schema)

 module.exports=put;

