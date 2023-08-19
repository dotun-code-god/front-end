var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    var mailOptions = {
        from: toEmail,
        to: process.env.EMAIL_ADDRESS,
        subject: subject,
        text: otpText,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            throw new Error(error);
        } else {
            console.log("Email Sent");
            return true;
        }
    });
}