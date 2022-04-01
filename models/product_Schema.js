const mongoose=require('mongoose');

const product_Schema=new mongoose.Schema({
    product_image:String,
    brand_name:String,
    product_name:String,
    rating:Number,
    price:Number,
    tag:String
});


module.exports=new mongoose.model('product',product_Schema);