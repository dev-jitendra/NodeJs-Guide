import express from 'express';
import user from "./database.js";
const router= express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/register',async(req,res)=>{
    try{
        let data = new user(req.body);
        let savedata = await data.save();
        res.render("login");
        // res.send(savedata);
        console.log("data Fetched");
    }catch(err){
        res.status(500).send(err);
        console.log("data Not Fetch");
    }
})
export default router;