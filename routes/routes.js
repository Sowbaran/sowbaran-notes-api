const express = require("express");
const router = express.Router();


let notes = ["go to college","go to office"];


router.get("/",(req,res)=>{
    res.send(notes)
})

router.get("/:id",(req,res)=>{
    //console.log(req.params.id );
    const id = (req.params.id)  * 1
    if(id > notes.length-1){
        res.send("There is no such data");
    }else{
        res.send(notes[id])
    }
    
    
})

router.post("/",(req,res)=>{
    const data = req.body;
    notes.push(data["msg"]);
    res.send("notes added!!! "+ data.msg);
})

router.put("/:id",(req,res)=>{
    const id = (req.params.id) * 1;
    const body = req.body.msg
    if(id > notes.length - 1){
        res.send("There is no such data is available!!!")
    }else{
        notes[id] = body
        res.send("notes updated!!! " + body)
    }
})

router.delete("/:id",(req,res)=>{
    const id = (req.params.id) * 1;
    if(id > notes.length - 1){
        res.send("There is no such data is available!!!")
    }else{
        notes.splice(id,1);
        res.send("data deleted successfully!!..!!")
    }
})

module.exports = router

