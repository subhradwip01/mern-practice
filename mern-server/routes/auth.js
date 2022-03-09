const express = require("express");
const   authController=require("../controller/auth")


const router = express.Router()


router.post("/signup",authController.postSignUp)

router.post("/login",authController.postLogin)

module.exports=router;