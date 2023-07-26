import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confpass: {
    type: String,
    require: true,
  },
  tockens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

schema.methods.generateTocken = async function () {
  try {
    const tockenuser = jwt.sign({ _id: this.id.toString() }, process.env.KEY);
      this.tockens = this.tockens.concat({ tocken: tockenuser });
      await this.save();
    // console.log(tockenuser);
    return tockenuser;
  } catch (err) {
    console.log(err);
  }
};
schema.pre("save", async function (next) {
  if(this.isModified("password")){
  this.password = await bcrypt.hash(this.password, 10);
  }next();
});

const usermodel = mongoose.model("userdetail", schema);
export default usermodel;
