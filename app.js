const express=require("express");
const  app=express();

const dotenv=require('dotenv');
dotenv.config({path:'./.env'});

const connection=require('./connection/db');
connection();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const view_route=require('./routes/view_route');
const auth_route=require('./routes/auth_route');
const product_route=require('./routes/product_route');

app.use(express.static("public"));

app.set('view engine','ejs')

app.use(view_route);
app.use(auth_route);


app.use('/api/product',product_route);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on PORT ${process.env.PORT}`);
})