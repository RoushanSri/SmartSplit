import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import ResponseError from "../types/ResponseError.js";

export const getProfile = asyncHandler(async(req, res)=>{
    
    const user = await User.findById(req.userId).populate("auth", "email username").populate("previousSplits", "-__v -updatedAt");
    if (!user) {
        throw new ResponseError(404, "User not found");
    }
    const data = {
        _id: user._id,
        username: user.auth.username,
        email: user.auth.email,
        name: user.name,
        totalSplitAmount: user.totalSplitAmount,
        pendingOwnedAmount: user.pendingOwnedAmount,
        pendingOwedAmount: user.pendingOwedAmount,
        previousSplits: user.previousSplits.slice(0,4),
        createdAt: user.createdAt,
    };
    res.json({ success: true, message: "User profile fetched successfully", data  });
})