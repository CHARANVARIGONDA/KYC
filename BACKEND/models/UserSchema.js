const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        unique: true,
        trim: true,
        match: [/^[0-9]{10}$/, "Phone number must be exactly 10 digits"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },

    dob: {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    kyc_status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    street: {
        type: String,
        required: [true, "Address is required"],
        trim: true,
        minlength: [5, "Address must be at least 5 characters"]
    },
    pincode: {
        type: String,
        required: [true, "Pincode is required"],
        trim: true,
        match: [/^[0-9]{6}$/, "Pincode must be exactly 6 digits"]
    },
    city: {
        type: String,
        required: [true, "City is required"],
        trim: true,
        minlength: [2, "City must be at least 2 characters"]
    },
    state: {
        type: String,
        required: [true, "State is required"],
        trim: true,
        minlength: [2, "State must be at least 2 characters"]
    },
    panNumber: {
        type: String,
        required: [true, "PAN number is required"],
        uppercase: true,
        trim: true,
        match: [/^[A-Z0-9]{10}$/, "PAN must be a valid 10-character code"]
    },
    ifsc: {
        type: String,
        required: [true, "IFSC code is required"],
        uppercase: true,
        trim: true,
        match: [/^[A-Z0-9]{11}$/, "IFSC code must be 11 characters"]
    },
    bankName: {
        type: String,
        required: [true, "Bank name is required"],
        trim: true,
        minlength: [2, "Bank name must be at least 2 characters"]
    },
    accountNumber: {
        type: String,
        required: [true, "Account number is required"],
        trim: true,
        minlength: [9, "Account number must be at least 9 digits"],
        maxlength: [18, "Account number cannot exceed 18 digits"]
    },
    nomineeName: {
        type: String,
        required: [true, "Nominee name is required"],
        trim: true,
        minlength: [3, "Nominee name must be at least 3 characters"]
    }
}, {
    timestamps: true // Automatically creates 'createdAt' and 'updatedAt'
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
