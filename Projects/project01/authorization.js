import jwt from "jsonwebtoken";
import usermodel from "./database.js";

const auth = async(req,res,next)=>{
    try{
        const token = req.cookie.jwt;
        const verify= jwt.verify(token, process.env.KEY);
        console.log(verify);
        const user = await usermodel.findOne({_id:verify.id});
        console.log(user);
        req.token=token;
        req.user=user;
        
        next();
    }catch(err){
        res.status(400).send(err);
    }
}

export default auth;