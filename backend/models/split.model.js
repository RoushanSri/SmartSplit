import mongoose from "mongoose";

const elementSchema = new mongoose.Schema({
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
        default: "pending"
      },
    },
  ],
});

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
      elementSchema
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
          default: "pending"
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
