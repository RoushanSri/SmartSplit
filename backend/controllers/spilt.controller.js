import asyncHandler from "express-async-handler";
import ResponseError from "../types/ResponseError.js";
import Split from "../models/split.model.js";

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



    res.status(201).json({ success: true, message: "Bill split created successfully", data: splitData });
})