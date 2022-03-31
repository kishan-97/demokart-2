const express=require("express");
const  app=express();
const ejs = require("ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());


const auth_route=require('./routes/auth_route');
app.use(express.static("public"));
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/shop",(req,res)=>{
    res.render("shop")
})

app.get("/sproduct",(req,res)=>{
    res.render("sproduct")
})

app.get("/blog",(req,res)=>{
    res.render("blog")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/cart",(req,res)=>{
    res.render("cart")
})

app.get('/login',(req,res)=>{
    res.render("login");
});

app.use('/api',auth_route);

app.listen(3000,()=>{
    console.log("Server running");
})