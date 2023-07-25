const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodejsguide").then(() => {
    console.log("Connection is successfully created");
  }).catch((err) => {
    console.log(`Connection failed ${err}`);
  });
const schema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  confirmpw:{
    type:String,
    required:true
  }
});
const User = mongoose.model("user", schema);
module.exports = User;