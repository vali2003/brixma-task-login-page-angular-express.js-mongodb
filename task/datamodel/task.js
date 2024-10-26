var mongo=require('mongoose');
var schema=mongo.Schema;
var empSchema=new schema({
    empName:String,
    empEmail:String,
    empPhone:String,
    empPassword:String,
    
})

var data=mongo.model('task',empSchema);
module.exports=data;

