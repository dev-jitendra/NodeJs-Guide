import express from 'express';
import user from "./database.js";
const router= express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});

export default router;