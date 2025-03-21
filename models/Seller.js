const mongoose = require("mongoose")

module.exports = mongoose.model("seller", new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: String, require: true },
    gender: { type: String, require: true },
    city: { type: String, require: true },
    address: { type: String, require: true },
    photo: { type: String, require: true },
    password: { type: String, require: true },
    isActive: { type: Boolean, default: false }
}, {}))