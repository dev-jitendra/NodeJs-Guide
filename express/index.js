const express = require("express");
const path = require("path");
const app = express();
const router = require('./router');

// Set the view engine to 'ejs'
app.set("view engine", "ejs");

// Define the 'views' folder where EJS templates are located
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));


app.use(router);

// Start the server and make it listen on port 3000
app.listen(3000, () => {
  // This callback function will be executed once the server is successfully listening on the specified port.
  console.log("Server is running on port 3000");
});
