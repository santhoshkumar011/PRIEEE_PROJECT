const nodemailer = require("nodemailer")
require('dotenv').config()

async function SendEmail(toAddr , otp) {
    console.log(process.env.EMAIL_ID , process.env.PASSWORD)
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: "220701239@rajalakshmi.edu.in" , 
                pass: "jbfi hrwn njyb ezqs"
            },
        });

        const mailObject = {
            from : "220701239@rajalakshmi.edu.in",
            to : toAddr , 
            subject  : "Leo Das",
            text: ` ${otp}`
        }

        const status = await transporter.sendMail(mailObject);
        return 1;
    }
    catch (error){
        console.log(error)
        return 0;
    }
}


module.exports = {
    SendEmail
}