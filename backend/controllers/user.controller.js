import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

export const getProfile = asyncHandler(async(req, res)=>{
    
    const user = await User.findOne({auth: req.userId}).populate("auth", "email username");
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const data = {
        _id: user._id,
        username: user.auth.username,
        email: user.auth.email,
        name: user.name,
        totalSplitAmount: user.totalSplitAmount,
        pendingOwnedAmount: user.pendingOwnedAmount,
        pendingOwedAmount: user.pendingOwedAmount,
        createdAt: user.createdAt,
    };
    res.json({ success: true, message: "User profile fetched successfully", data  });
})