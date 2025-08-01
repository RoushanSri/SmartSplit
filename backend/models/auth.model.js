import mongoose from "mongoose";
const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);

export default Auth;