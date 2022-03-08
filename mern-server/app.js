const bodyParser = require("body-parser");
const express = require("express");


const app=express();

// middlewire
app.use(bodyParser.json())

// server
app.listen(8080,()=>{
    console.log("Server started at 8080 port")
})
