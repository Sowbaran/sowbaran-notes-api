const express = require("express");
const app = express();
const port = 5000

app.get("/ping",(req,res)=>{
    res.send("Server is running");
})


app.listen(port,()=>{
    console.log("App is listening on the",port)
})