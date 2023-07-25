function agedetector(req,res,next){
    // console.log(object);
    if(req.query.age>18){
        res.send("Your are greate you can enter this website");
    }
    else{
        res.send("You can't Access this site");
    }
}
module.exports=agedetector;