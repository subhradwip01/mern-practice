const User = require("../model/user")

exports.getUserInfo=(req,res,next)=>{ 
   res.status(201).send(
       req.rootUser
   )
}

exports.postMessage=async (req,res,next)=>{
    const uid=req.userId;
    const {message}=req.body;
    try {
        const user = await User.findById(uid)
        if(!user){
            const err = new Error("User doesn't with this email Id!");
            err.statusCode = 422;
            throw err;
        }
        user.notes.push({message:message})
        await user.save()
        res.status(201).json({
            message:"Succesfull"
        })
    } catch (e) {
        next(e)
    }
    
}