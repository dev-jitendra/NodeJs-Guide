const express = require("express");
const path = require("path");
const app = express();

// Set the view engine to 'ejs'
app.set("view engine", "ejs");

// Define the 'views' folder where EJS templates are located
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define route for the root path ("/")
app.get("/", (req, res) => {
  // Send the 'index.html' file located in the 'public' directory as the response
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define route for the "/about" path
app.get("/about", (req, res) => {
  // Send the 'home.html' file located in the 'public' directory as the response
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Define route for the "/data" path
app.get("/data", (req, res) => {
  // Send a JSON response back to the client with some data
  res.send({
    name: "narendra",
    age: 23,
    address: "indore",
  });
});

// Define route for the "/download" path
app.get("/download", (req, res) => {
  // Trigger a file download of 'home.html' located in the 'public' directory
  res.download(path.join(__dirname, "public", "home.html"));
});

// Start the server and make it listen on port 3000
app.listen(3000, () => {
  // This callback function will be executed once the server is successfully listening on the specified port.
  console.log("Server is running on port 3000");
});
