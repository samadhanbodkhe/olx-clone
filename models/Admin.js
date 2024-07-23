const mongoose = require("mongoose")

const adminSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,

    }
}, { timestamps: true })

module.exports = mongoose.model("admin", adminSchma)