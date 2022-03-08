const bodyParser = require("body-parser");
const express = require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config()

const DB=process.env.DATABASE;
console.log(DB)

const app=express();

// middlewire
app.use(bodyParser.json())
app.get("/",(req,res,next)=>{
    res.send({
        name:"Subhradwip",
        age:20
    })
})


// server and database connection
mongoose.connect(DB).then(()=>{
    console.log("Connected to database")
    app.listen(8080,()=>{
        console.log("Server started at 8080 port")
    })
}).catch(err=>{
    console.log("Error in connection")
})
