import mongoose from "mongoose";

const splitSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    event: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Element",
      },
    ],
    participants: [
      {
        name: {
          type: String,
          required: true,
        },
        contri: {
          type: Number,
          required: true,
        },
        paid: {
          type: Number,
          default: 0,
        },
        status: {
          type: String,
          enum: ["pending", "completed"],
          default: "pending",
          required: true,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    owedAmount: {
      type: Number,
      default: 0,
    },
    ownedAmount: {
      type: Number,
      default: 0,
    },
    billImage: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Split = mongoose.model("Split", splitSchema);
export default Split;
