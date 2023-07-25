const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodejsguide").then(() => {
    console.log("Connection is successfully created");
  }).catch((err) => {
    console.log(`Connection failed ${err}`);
  });
const schema = new mongoose.Schema({
  name: String,
});
const User = mongoose.model("user", schema);
module.exports = User;