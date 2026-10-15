const express = require("express");
const router = express.Router();
const User = require('../models/UserSchema.js');
const asyncHandler = require("../middlewares/asyncHandler");
const getKycStatus = asyncHandler(async (req, res) => {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "No KYC application found with this email"
        });
    }

    return res.status(200).json({
        success: true,
        message: `KYC application is ${user.kyc_status}`,
        data: {
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            isCompleted: user.kyc_status === "approved",
            kycStatus: user.kyc_status,
            submittedAt: user.createdAt
        }
    });
});

const submitKyc = asyncHandler(async (req, res) => {
    const { email, phone } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "A KYC application with this email already exists"
        });
    }
    const newUser = await User.create(req.body);
    return res.status(201).json({
        success: true,
        user: newUser
    });
});

module.exports = { submitKyc, getKycStatus };