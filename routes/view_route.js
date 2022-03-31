const Router=require('express').Router();

const {home_controller,
    shop_controller,
    sproduct_controller,
    blog_controller,
    about_controller,
    contact_controller,
    cart_controller,
    login_controller}=require('../controllers/view_controller');

Router.get("/",home_controller);

Router.get("/shop",shop_controller)

Router.get("/sproduct",sproduct_controller)

Router.get("/blog",blog_controller);

Router.get("/about",about_controller);

Router.get("/contact",contact_controller);

Router.get("/cart",cart_controller)

Router.get('/login',login_controller);

module.exports=Router;