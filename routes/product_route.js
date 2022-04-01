const express=require('express');
const Router=express.Router();

const {create_product_controller}=require('../controllers/product_controller');

Router.post('/createProduct',create_product_controller);

module.exports=Router;