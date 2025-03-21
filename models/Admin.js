const mongoose = require("mongoose")

module.exports = mongoose.model("admin", new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: String, require: true },
    otp: { type: String },
    otpsendOn: { type: Date },
    isActive: { type: Boolean, default: false }
}, {}))