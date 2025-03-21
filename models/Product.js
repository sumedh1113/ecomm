const mongoose = require("mongoose")

module.exports = mongoose.model("product", new mongoose.Schema({
    name: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: String, require: true },
    desc: { type: String, require: true },
    images: { type: [String], require: true },
    stock: { type: String, require: true },
    seller: { type: mongoose.Types.ObjectId, ref: "seller", required: true },
    isPublish: { type: Boolean, default: false }
}, {}))