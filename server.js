const express = require("express");
const app = express();
const mongoose = require('mongoose');
const models = require('./mongoose/models')

mongoose.connect('mongodb://localhost:27017/FOR-CRUD')


app.use(express.json())


app.get("/api/get", (req, res)=>{
  const record = [{four : "finger"}, {five : "three"}]
  res.json(record)
})

app.post("/api/create", async (req, res) => {
  const record = req.body;
  console.log(record)
  const one = await models.create({record})
  console.log(one)
});

app.get("/api/read", async (req, res)=>{
  const response = await models.findById({one})
  console.log(response)
  res.json(response)
})

app.post("/api/modify", async (req, res)=>{
  const {old : oldTimes, news : newTimes} = req.body
  const response = await models.updateOne({
    record : oldTimes
  }, 
   {
     $set : {
       record : newTimes
     }      
   }
  )
  
  console.log(response)
  res.json({response})
})

app.post("app/delete", async (req, res)=>{
 const reqs = req.body
 const responses = await models.deleteOne(reqs)
 console.log(responses)
 res.json(responses)

})


app.listen(9669, () => {
  console.log("http://localhost:"+9669+'/api/create');
}); 
