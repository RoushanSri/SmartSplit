import mongoose from "mongoose";

const elementSchema = new mongoose.Schema({
  split: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Split",
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  participants: [
    {
      name: {
        type: String,
        required: true,
      },
      contribution: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
        required: true,
      },
    },
  ],
});

const Element = mongoose.model("Element", elementSchema);
export default Element;