const express= require('express');
const app=express();
const user= require('./connection');

app.get('/',(req,res)=>{
    console.log(req);
    res.send("hello")
})
app.listen(2300,()=>{
    console.log("Server Is Running");
})