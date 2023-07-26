import express from "express";
import user from "./database.js";
import bcrypt from "bcryptjs";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/register", async (req, res) => {
  try {
    let data = new user(req.body);
    if (data.password === data.confpass) {
        let emailvalidation = await user.findOne({email:data.email});
        if(emailvalidation){
            // res.send("This email already Exitst, Please Login")
        }
        const tocken =await data.generateTocken();
        console.log("This tocken is user"+tocken);
        res.cookie('jwt',tocken);

      let savedata = await data.save();
      // res.send(savedata);
      res.render("login");
      console.log("Sign Up data Fetched");
    } else {
      res
        .status(400)
        .send(
          `Not Match Password \nPassword: ${data.password} Not matched Confirm Password: ${data.confpass} `
        );
    }
  } catch (err) {
    res.status(500).send(err);
    console.log("Sign Up data Not Fetch" + err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const passworduser = req.body.password;
    const checkemail = req.body.email;
    const databasedata = await user.findOne({ email: checkemail });
    const ismatch = await bcrypt.compare(passworduser, databasedata.password);
    if (!ismatch) {
      res.status(400).send(`Incorrect Password`);
      console.log("Login data Not Fetch");
    } else {
        const tocken = await databasedata.generateTocken();
        console.log("This tocken is user" + tocken);
        res.cookie("jwt", tocken);
      res.render("contact");
      console.log("Login data Fetched");
    }
  } catch (err) {
    res.status(400).send(err);
    console.log("Login data Not Fetch");
  }
});

router.post("/loginn", async (req, res) => {
  res.render("/login");
});
export default router;
