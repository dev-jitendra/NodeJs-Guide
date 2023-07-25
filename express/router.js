const express = require("express");
const router = express.Router();

// Define route for the root path ("/")
router.get("/", (req, res) => {
  // Send the 'index.html' file located in the 'views' directory as the response
  res.render("index", {
    title: "home",
  });

  // Send the 'index.html' file located in the 'public' directory as the response
  // res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define route for the "/about" path
router.get("/about", (req, res) => {
  // Send the 'home.html' file located in the 'views' directory as the response
  res.render("home",{
    title:"home"
  });

  // Send the 'home.html' file located in the 'public' directory as the response
  // res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Define route for the "/data" path
router.get("/data", (req, res) => {
  // Send a JSON response back to the client with some data
  res.send({
    name: "narendra",
    age: 23,
    address: "indore",
  });
});

// Define route for the "/download" path
router.get("/download", (req, res) => {
  // Trigger a file download of 'home.html' located in the 'public' directory
  // res.download(path.join(__dirname, "public", "home.html"));
});
module.exports=router;