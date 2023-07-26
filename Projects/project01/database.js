import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/project01")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  confpass:{
    type:String,
    require:true
  }
});

const usermodel = mongoose.model("userdetail", schema);
export default usermodel;
