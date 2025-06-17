import asyncHandler from "express-async-handler";
import ResponseError from "../types/ResponseError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Auths from "../models/auth.model.js";
import User from "../models/user.model.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Auths.findOne({
    $or: [{ email }, { username: email }],
  });
  if (!user) throw new ResponseError("User does not exist", 401);

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new ResponseError("Invalid credentials", 401);

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
  });

  res.json({ success: true, message: "Login successful", data: token });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
  });
  res.json({ success: true, message: "Logout successful" });
});

export const register = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    throw new ResponseError("All fields are required", 400);
  }

  const existingUser = await Auths.findOne({
    $or: [{ email }, { username }],
  });
  if (existingUser) {
    throw new ResponseError("User already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await Auths.create({
    email,
    username,
    password: hashedPassword,
  });

  const user = await User.create({
    auth: newUser._id,
    name: username,
    totalSplitAmount: 0,
    pendingOwnedAmount: 0,
    pendingOwedAmount: 0,
  });

  const token = jwt.sign(
    { authId: newUser._id, userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
  });

  res
    .status(201)
    .json({ success: true, message: "Registration successful", data: token });
});
