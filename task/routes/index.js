var express = require('express');
var router = express.Router();
var task=require('../datamodel/task');

router.get('/',(req,res)=>{
  task.find({})
  .then((data)=>res.json(data))
  .catch((err)=>console.log(err))
})

router.post('/add',(req,res)=>{
  var newemp= new task(req.body);
  newemp.save()
  .then(()=>res.send("data saved!"))
  .catch((err)=>console.log(err))
})

router.delete('/del/:id',(req,res)=>{
  let empId=req.params.id;
  task.deleteOne({_id:empId})
  .then((result)=>{
    if(result.deletedCount>0)
      res.send("Data deleted")
    else
      res.send("Data not found")
  })
  .catch((err)=>console.log(err))
})

router.put('/up/:id',(req,res)=>{
  let empId=req.params.id;
  let upemp=req.body;
  task.updateOne({_id:empId},upemp)
  .then((result)=>{
    if(result.modifiedCount>0)
      res.end("Data Updated")
    else
      res.end("Data not found")
  })
  .catch((err)=>console.log(err))
})

module.exports = router;

