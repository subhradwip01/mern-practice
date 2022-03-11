const express = require("express");
const userController=require("../controller/user")
const authenticate=require("../middleware/authenticate");

const router = express.Router()


router.get("/getinfo",authenticate,userController.getUserInfo)
router.post("/sendmessage",authenticate,userController.postMessage)

module.exports=router;