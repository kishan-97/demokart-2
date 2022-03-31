const express=require("express");
const  app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const view_route=require('./routes/view_route');
const auth_route=require('./routes/auth_route');

app.use(express.static("public"));

app.set('view engine','ejs')

app.use(view_route);

app.use('/api',auth_route);

app.get('/login',(req,res)=>{
    res.render("login");
});

app.use('/api',auth_route);

app.listen(3000,()=>{
    console.log("Server running");
})