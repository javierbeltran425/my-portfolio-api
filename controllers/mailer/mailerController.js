const nodemailer = require("nodemailer");

var mailerController = {
    sendMail: async function (req, res) {

        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: `${process.env.NODEM_USER}`, // generated ethereal user
                pass: `${process.env.NODEM_PASSWORD}`, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `${process.env.NODEM_USER}`, // sender address
            to: `${req.body.sendemail}`, // list of receivers
            subject: "Portfolio Message", // Subject line
            html: `
            <h1>Portfolio Message from ${req.body.email}</h1>
            <h4>Name: ${req.body.name}</h4>
            <h4>Contact phone: ${req.body.phone}</h4>
            <h2>Portfolio Message</h2>
            <b>${req.body.message}</b>
            `, // html body
        });

        res.send(info)
    }
}

module.exports = mailerController