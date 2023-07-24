const express = require("express");
const path = require("path");
const app = express();
const pathdir = path.join(__dirname, "public");
console.log(pathdir);
app.use(express.static(pathdir));
// console.log(express);
app.get("/", (req, res) => {
  res.sendFile(`${pathdir}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${pathdir}/home.html`);
});
app.get("/data", (req, res) => {
  res.send({
    name: `narendra`,
    age: 23,
    address: "indore",
  });
});
app.get("/download", (req, res) => {
  res.download(`${pathdir}/home.html`);
});
app.listen(3120, console.log("server is running"));
