const product=require('../models/product_Schema');

const home_controller=(req,res)=>{
    res.render("home")
};

const shop_controller=(req,res)=>{
    res.render("shop")
};

const sproduct_controller=async(req,res)=>{
    try{
    console.log(req.params.id);
    res.render("sproduct");
    }
    catch(e)
    {
        console.log(e);
    }
};

const blog_controller=(req,res)=>{
    res.render("blog")
};

const about_controller=(req,res)=>{
    res.render("about")
};

const contact_controller=(req,res)=>{
    res.render("contact")
};

const cart_controller=(req,res)=>{
    res.render("cart")
};

const login_view_controller=(req,res)=>{
    res.render("login")
};

module.exports={home_controller,shop_controller,sproduct_controller,blog_controller,about_controller,contact_controller,cart_controller,login_view_controller};