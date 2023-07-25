const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/nodejsguide")
  .then(() => {
    console.log("connection is successfully created");
  })
  .catch((err) => {
    console.log(`Connection failed ${err}`);
  });

  const schema= new mongoose.Schema({
    name:String,
  })

  const user=mongoose.model('use',schema)

  module.exports= user;