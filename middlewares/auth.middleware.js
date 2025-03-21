const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
exports.sellerProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies.SELLER
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, data) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token", error: err.message })
        }

        req.user = data._id
        next()
    })
})
exports.adminProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies.ADMIN
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, data) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token", error: err.message })
        }

        req.user = data._id
        next()
    })
})