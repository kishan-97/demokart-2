const product=require('../models/product_Schema');

const create_product_controller=async(req,res)=>{
    try{
    const new_product=req.body;
    const response=await new product(new_product).save();
    res.json(response);
    }
    catch(e)
    {
        console.log(e);
    }
}

const get_product_controller=async(req,res)=>{
    try{
        
        const cur_product=await product.findById(req.params.id);
        res.json(cur_product);

    }
    catch(e)
    {
        console.log(e);
    }
}
module.exports={create_product_controller,get_product_controller};