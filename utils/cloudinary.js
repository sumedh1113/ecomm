const cloud = require("cloudinary").v2
cloud.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUNDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
})

module.exports = cloud