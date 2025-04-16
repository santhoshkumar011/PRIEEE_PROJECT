const { PrismaClient } = require('../generated/prisma');
const { hashChecker } = require('../hashAndOtp/hashChecker');
const { hashGenerator } = require('../hashAndOtp/hashGenerator');
const { OtpGenerator } = require('../hashAndOtp/OtpGenerator');
const { SendEmail } = require('../sendEmail/email');

const prisma = new PrismaClient();

async function forgotPassword(req,res) {
    try{
        
        const user2 = await prisma.user.findFirst({
            where:{
                username:req.body.uname
            }
        })
        if(!user2){
            res.status(200).json({
                err:"Wrong user name"
            })
            return
        }
        else{
            const otp = OtpGenerator();
            const utc = new Date();
            const now = new Date(utc.getTime()+5.5*60*60*1000);
            const exp = new Date(now.getTime()+60*60*1000);
            const email = await SendEmail(user2.email,otp);
            
            if(email==0){
                res.status(400).json({
                    err:"Error sending email try again"
                })
            }
            else{
                const del = await prisma.otp.deleteMany({
                    where:{
                        userId:user2.id
                    }
                })
                const update = await prisma.otp.create({
                    data:{
                        expiry:exp,
                        otp:otp,
                        status:"PENDING",
                        userId:user2.id
                    }
                });
                res.status(200).json({
                    msg:"Successful"
                })
                return
            }
        }
        res.status(200).json({
            err:"Otp send panna mudila"
        })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            err:"internal error"
        })
    }
}

module.exports={
    forgotPassword
}