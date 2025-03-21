const { getPublicProducts, getPublicProductDetail } = require("../contollers/public.contoller")

const router = require("express").Router()

router
    .get("/products", getPublicProducts)
    .get("/product-details/:pid", getPublicProductDetail)
module.exports = router