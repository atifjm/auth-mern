import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "User name must be between 3-16 characters"],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password must be between 6-20 characters"],
    },
    confirmPassword: {
        type: String,
        required: [true, "Password must be between 6-20 characters"]
    },
    profilePicture: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true})


module.exports("User", UserSchema)