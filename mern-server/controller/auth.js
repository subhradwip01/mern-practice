const User = require("../model/user");
const { use } = require("../routes/auth");

exports.putSignUp= async (req,res,next)=>{
    const name=req.body.name;
    const password=req.body.password;
    const email=req.body.email;
    const mobile=req.body.mobile;

    if(!name || !password || !email || !mobile){
        return res.status(422).json({
            message:"Plese provide valid values"
        })
    }

    const user = new User({
        name,  password ,email , mobile
    })
    
    try {
        const userExist= await User.findOne({email:email})
        if(userExist){
            const err = new Error("User is Already Exist");
            err.statusCode= 422;
            throw err
        }

        const result = await user.save();
        if(!result){
            throw new Error("Something went wrong!")
        }
        res.status(201).json({
            message:"User Created",
            userId: result._id
        })
    }
    catch(e){
        next(e)
    }
}