const mongoose=require('mongoose');

const connection=async()=>{
    try{
    const res=await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports=connection;