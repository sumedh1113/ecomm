const nodemailer = require("nodemailer")

const sendEmail = ({ to, subject, message }) => new Promise((resolve, reject) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.EMAIL, pass: process.env.PASS }
        })

        transporter.sendMail({ to, subject, text: message }, (err) => {
            if (err) {
                console.log(err)
                reject("unable to send mail")
            }
            console.log("email send")
            resolve("email send")
        })
    } catch (error) {
        console.log(error)
        reject(error.message)
    }
})

module.exports = sendEmail