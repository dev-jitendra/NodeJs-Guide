import express from "express";
import user from "./database.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/register", async(req, res) => {
  try {
    let data = new user(req.body);
    if(data.password===data.confpass){
        let savedata = await data.save();
        // res.send(savedata);
        res.render("login");
        console.log("Sign Up data Fetched");
    }else{
        res
          .status(400)
          .send(
            `Not Match Password \nPassword: ${data.password} Not matched Confirm Password: ${data.confpass} `
          );
    }
  } catch (err) {
    res.status(500).send(err);
    console.log("Sign Up data Not Fetch");
  }
});

router.post("/login", async(req, res) => {
  try {
    const checkemail = req.body.email;
    const databasedata = await user.findOne({ email: checkemail });
    if (!databasedata) {
      res.status(400).send(`Not exist this mail ${databasedata}`);
      console.log("Login data Not Fetch");
    } else {
      res.send(databsedata);
      res.render('contact');
      console.log("Login data Fetched");
    }
  } catch (err) {
    res.status(400).send(err);
    console.log("Login data Not Fetch");
  }
});
export default router;
