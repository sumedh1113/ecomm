const { continuewithGoogle, userLogout, sellerRegister, sellerLogin, sellerLogout, adminRegister, sendOtp, adminLogin, adminLogout } = require("../contollers/auth.contoller")

const router = require("express").Router()

router
    .post("/continue-with-google", continuewithGoogle)
    .post("/user-logout", userLogout)

    .post("/seller-register", sellerRegister)
    .post("/seller-login", sellerLogin)
    .post("/seller-logout", sellerLogout)

    .post("/admin-register", adminRegister)
    .post("/send-otp", sendOtp)
    .post("/admin-login", adminLogin)
    .post("/admin-logout", adminLogout)

module.exports = router