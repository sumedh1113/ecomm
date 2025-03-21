const { addProduct, getProducts, updateProduct, deleteProduct } = require("../contollers/seller.contoller")

const router = require("express").Router()

router
    .post("/add-product", addProduct)
    .get("/get-product", getProducts)
    .patch("/update-product/:pid", updateProduct)
    .delete("/delete-product/:pid", deleteProduct)

module.exports = router