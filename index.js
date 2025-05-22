const express = require("express");
const app = express();
const port = 5000
app.use(express.json())
const router = require("./routes/routes");

app.use("/notes",router);

app.listen(port,()=>{
    console.log("App is listening on the",port)
})