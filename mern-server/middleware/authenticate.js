const jwt=require("jsonwebtoken")
const User=require("../model/user")

const authenticate=async (req,res,next)=>{

    try {
        const authToken=req.get("Authorization");
        if(!authToken){
            const error=new Error("Not authorized");
            error.statusCode=401;
            throw error;
        }

        const token=authToken.split(" ")[1];
        const decoded=jwt.verify(token,process.env.PRIVATE_KEY)
        const rootUser= await User.findById(decoded.userId)
        
        if(!rootUser){
            const err=new Error("Unauthorized! User not found")
            err.statusCode=401;
            throw err
        }

        req.userId=decoded.userId
        req.rootUser=rootUser
        next()
    } catch (e) {
        next(e)
    }

}
module.exports=authenticate