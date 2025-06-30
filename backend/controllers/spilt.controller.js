import asyncHandler from "express-async-handler";
import ResponseError from "../types/ResponseError.js";
import Split from "../models/split.model.js";
import User from "../models/user.model.js";
import fs from 'fs/promises';
import sharp from 'sharp';
import Tesseract from 'tesseract.js';
import model from "../config/gemini.js";

async function callGeminiAPI(receiptText) {

  try{
    const prompt = `
  Extract item name, quantity, price and amount from this receipt.

  Rules:
  - Ignore any extra charges like tax, service charge, delivery fee, tips, etc.
  - If a discount percentage is mentioned, apply it directly to each item's price.
  - If a discount amount is mentioned, calculate the discount percentage based on the sum of item prices and apply that percentage to each item.
  - Ignore any item that has price as 0.
  - Round final prices to two decimal places.

  Format the response strictly as a JSON array:
  [{"item":"Item Name","qty":2,"price":50.00, "amount": 100.00},...]

  Text:
  ${receiptText}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = await response.text();

    text = text.replace(/```json|```/g, '').trim();

    const parsedJSON = JSON.parse(text);

    return parsedJSON;
    }catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new ResponseError(500, "Failed to process receipt with Gemini API");
    }
}

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
        amount: parseFloat(parseFloat(amount).toFixed(2)),
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

    res.status(201).json({ success: true, message: "Bill split created successfully", data: split });
})

export const editBill = asyncHandler(async(req, res)=>{
    const { splitId } = req.query;
    const { participants, owedAmount, ownedAmount } = req.body;

    if (!participants) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    } 

    let status = "pending";
    if (participants.every(participant => participant.status === "completed"))
        status = "completed";

    const split = await Split.findByIdAndUpdate(splitId, {
        participants,
        owedAmount: owedAmount || 0,
        ownedAmount: ownedAmount || 0,
        status
    });

    if(!split){
        throw new ResponseError(404, "Bill split not found");
    }    

    const user = await User.findById(req.userId);
    
    if (!user) {
        throw new ResponseError(404, "User not found");
    }
    user.pendingOwnedAmount = parseFloat(parseFloat(user.pendingOwnedAmount + (ownedAmount || 0) - (split.ownedAmount || 0)).toFixed(2));
    user.pendingOwedAmount = parseFloat(parseFloat(user.pendingOwedAmount + (owedAmount || 0) - (split.owedAmount || 0)).toFixed(2));
    user.save();

    const updatedSplit = await Split.findById(splitId);

    if (!updatedSplit) {
        throw new ResponseError(404, "Updated bill split not found");
    }

    res.status(200).json({ success: true, message: "Bill split updated successfully", data: updatedSplit });
})

export const extractText = asyncHandler(async(req, res)=>{
    const inputPath = req.file.path;
  const processedPath = inputPath + '_processed.png';

  try {
    await sharp(inputPath)
      .grayscale()
      .normalize()
      .resize({ width: 1000 })
      .toFile(processedPath);

    const { data: { text } } = await Tesseract.recognize(processedPath, 'eng');

        await fs.unlink(processedPath);

        const response = await callGeminiAPI(text);

    res.status(200).json({ success: true, message: "Text extracted successfully", data: response });
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ success: false, message: "Failed to extract text from image" });
  }
})

export const pastSplits = asyncHandler(async(req, res)=>{
    const splits = await Split.find({ user: req.userId }).sort({ createdAt: -1 });

    if (!splits || splits.length === 0) {
        return res.status(404).json({ success: false, message: "No past splits found" });
    }

    res.status(200).json({ success: true, message: "Past splits retrieved successfully", data: splits });
})

export const getSplit = asyncHandler(async(req, res)=>{
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ success: false, message: "Split ID is required" });
    }

    const split = await Split.findById(id);

    if (!split) {
        throw new ResponseError(404, "Bill split not found");
    }

    res.status(200).json({ success: true, message: "Bill split retrieved successfully", data: split });
})