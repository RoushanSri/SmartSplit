import asyncHandler from "express-async-handler";
import ResponseError from "../types/ResponseError.js";
import Split from "../models/split.model.js";
import User from "../models/user.model.js";

export const splitBill = asyncHandler(async(req, res)=>{
    const { event, participants, owedAmount, ownedAmount, billImage, items, description, amount } = req.body;

    if (!event || !participants || !amount || !items) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const splitData = {
        user: req.userId,
        event,
        participants,
        items,
        description: description,
        amount,
        owedAmount: owedAmount || 0,
        ownedAmount: ownedAmount || 0,
        billImage: billImage || ""
    };

    const split = await Split.create(splitData);

    if(!split){
        throw new ResponseError(500, "Failed to create bill split");
    }

    const user = await User.findById(req.userId);
    
    if (!user) {
        throw new ResponseError(404, "User not found");
    }
    user.previousSplits.push(split._id);
    user.pendingOwnedAmount += ownedAmount || 0;
    user.pendingOwedAmount += owedAmount || 0;
    user.totalSplitAmount += amount || 0;
    await user.save();

    res.status(201).json({ success: true, message: "Bill split created successfully", data: splitData });
})

export const editBill = asyncHandler(async(req, res)=>{
    const { splitId } = req.query;
    const { participants, owedAmount, ownedAmount } = req.body;

    if (!participants) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    } 

    const split = await Split.findByIdAndUpdate(splitId, {
        participants,
        owedAmount: owedAmount || 0,
        ownedAmount: ownedAmount || 0
    });

    if(!split){
        throw new ResponseError(404, "Bill split not found");
    }    

    const user = await User.findById(req.userId);
    
    if (!user) {
        throw new ResponseError(404, "User not found");
    }
    user.pendingOwnedAmount += (ownedAmount || 0) - (split.ownedAmount || 0);
    user.pendingOwedAmount += (owedAmount || 0) - (split.owedAmount || 0);
    await user.save();

    const updatedSplit = await Split.findById(splitId);

    if (!updatedSplit) {
        throw new ResponseError(404, "Updated bill split not found");
    }

    res.status(200).json({ success: true, message: "Bill split updated successfully", data: updatedSplit });
})