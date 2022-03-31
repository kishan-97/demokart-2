const home_controller=(req,res)=>{
    res.render("home")
};

const shop_controller=(req,res)=>{
    res.render("shop")
};

const sproduct_controller=(req,res)=>{
    res.render("sproduct")
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

const login_controller=(req,res)=>{
    res.render("login")
};

module.exports={home_controller,shop_controller,sproduct_controller,blog_controller,about_controller,contact_controller,cart_controller,login_controller};