const { PrismaClient } = require('../generated/prisma');
const { hashChecker } = require('../General/hashChecker');
const { hashGenerator } = require('../General/hashGenerator');

const prisma = new PrismaClient();

async function verifyOTPforLogin(req,res) {
    try{
        const st = await prisma.user.findFirst({
            where:{
                username:req.body.uname
            }
        })
        const user = await prisma.otp.findFirst({
            where:{
                userId:st.id
            }
        })
        if(!st || !user){
            res.status(200).json({
                err:"Invalid request"
            })
            return
        }
        else{
            const utc = new Date();
            const now = new Date(utc.getTime()+5.5*60*60*1000);
            const otpExpiry = new Date(user.expiry);
            if(user.otp===req.body.otp && now<otpExpiry){
                const exp = new Date(now.getTime()+60*60*1000);
                const session = await hashGenerator(toString(st.username)+toString(exp));
                const update = await prisma.otp.updateMany({
                    where:{
                        userId:st.id
                    },
                    data:{
                        status:"APPROVED"
                    }
                })
                const removeIfExists = await prisma.session.deleteMany({
                    where:{
                        userId:st.id
                    }
                })
                const addSession =  await prisma.session.create({
                    data:{
                        expiry: exp,
                        session: session.hash,
                        userId:st.id
                    }
                }) 
                
                res.status(200).json({
                    msg:"Success",
                    uname:st.uname,
                    session:session
                })
            }
            
            else{
                res.status(200).json({
                    err:"OTP verificaion failed"
                })
            }
        }
    }
    catch (error){
        console.log(error);
        res.status(400).json({
            err:"Internal error"
        })
    }
}

module.exports = { 
    verifyOTPforLogin
}