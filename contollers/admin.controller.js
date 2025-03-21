const asyncHandler = require("express-async-handler")
const Seller = require("../models/Seller")
const Product = require("../models/Product")

exports.getAllSellers = asyncHandler(async (req, res) => {
    const { limit, start } = req.query
    const total = await Seller.countDocuments()
    const result = await Seller.find().skip(start).limit(limit)
    res.json({ message: "fetch all sellers", result, total })
})
exports.getAllproducts = asyncHandler(async (req, res) => {
    const result = await Product.find()
    res.json({ message: "fetch all products", result })
})

exports.blockUnblock = asyncHandler(async (req, res) => {
    await Seller.findByIdAndUpdate(req.params.sid, { isActive: req.body.isActive })
    res.json({ message: "seller acc update" })
})
exports.publishUnpublishProduct = asyncHandler(async (req, res) => {
    await Product.findByIdAndUpdate(req.params.pid, { isPublish: req.body.isPublish })
    res.json({ message: "product update" })
})