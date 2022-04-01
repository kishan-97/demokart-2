const login_controller=async(req,res)=>{
    console.log(req.body);
    res.json("Login Woute Working");
}

const signup_controller=async(req,res)=>{

}

module.exports={login_controller,signup_controller};