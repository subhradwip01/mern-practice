const User = require("../model/user")

exports.getUserInfo=(req,res,next)=>{ 
   res.status(201).send(
       req.rootUser
   )
}

exports.postMessage=async (req,res,next)=>{
    const uid=req.userId;
    const message=req.body.message;
    if(!message){
        return res.status(422).json({
            message: "Plese provide valid values",
          });
    }
    try {
        const user = await User.findById(uid)
        if(!user){
            const err = new Error("User doesn't with this email Id!");
            err.statusCode = 422;
            throw err;
        }
        const result= await user.addMessage(message)
        res.status(201).json({
            message:result
        })
    } catch (e) {
        next(e)
    }
    
}