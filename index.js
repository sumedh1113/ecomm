const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { sellerProtected, adminProtected } = require("./middlewares/auth.middleware")
require("dotenv").config()
const path = require("path")


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.static("dist"))
app.use(cors({
    origin: "https://ecomm-s2iq.onrender.com",
    credentials: true
}))
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/seller", sellerProtected, require("./routes/seller.routes"))
app.use("/api/admin", adminProtected, require("./routes/admin.routes"))
app.use("/api/public", require("./routes/public.route"))

app.use("*", (req, res) => {
    // res.status(404).json({ message: "resource not found" })
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "server error", error: err.message })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running"))
})

