const { getAllproducts, getAllSellers, publishUnpublishProduct, blockUnblock } = require("../contollers/admin.controller")

const router = require("express").Router()

router
    .get("/products", getAllproducts)
    .get("/sellers", getAllSellers)

    .patch("/product-update/:pid", publishUnpublishProduct)
    .patch("/seller-update/:sid", blockUnblock)
module.exports = router