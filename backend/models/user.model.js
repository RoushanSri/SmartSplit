import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    auth: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    totalSplitAmount: {
      type: Number,
      default: 0,
    },
    pendingOwnedAmount: {
      type: Number,
      default: 0,
    },
    pendingOwedAmount: {
      type: Number,
      default: 0,
    },
    previousSplits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Split",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
