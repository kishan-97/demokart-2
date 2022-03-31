const mongoose=require('mongoose');

const user_schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cart:[String]
})

module.export=mongoose.model('user',user_schema);