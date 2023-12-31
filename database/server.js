const express = require("express");
const app = express();
const user = require("./connection");

app.use(express.json());
app.post("/", async (req, res) => {
  try {
    const senddata = new user(req.body);
    const savedata = await senddata.save();
    res.send(savedata);
  } catch (error) {
    res.status(404).status(error);
    console.log(error);
  }
});

app.get("/user", async (req, res) => {
  try {
    const getdata = await user.find({});
    res.send(getdata);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

app.get('/user/:id',async(req,res)=>{
    try{
        const id= req.params.id;
        const getiddata= await user.findById({_id:id});
        res.send(getiddata)
    }catch(error){
        res.status(400).send(error);
    }
});

app.patch('/update/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    const updatedata= await user.findByIdAndUpdate({_id:id},req.body,{new:true});
    res.send(updatedata);
}catch(err){
    res.status(500).send(err);
}
});

app.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const deletedata= await user.findByIdAndDelete({_id:id});
        res.send(deletedata);
        console.log('data deleted!!!')
    }catch(err){
        res.status(500).send(err);
    }
});

app.post('/login',async(req,res)=>{
    try{
        const usermail= req.body.email;
        const getmail= await user.findOne({email:usermail});
        res.send(getmail);
    }catch(error){
        res.status(500).send(error);
    }
})
app.listen(2300, () => {
  console.log("Server Is Running");
});
