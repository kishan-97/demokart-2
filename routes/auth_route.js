const Router=require('express').Router();
const {login_controller,signup_controller}=require( '../controllers/auth_controller');

Router.post('/login',login_controller);
Router.post('/signup',signup_controller);

module.exports=Router;