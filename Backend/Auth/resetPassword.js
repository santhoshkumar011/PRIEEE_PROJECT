const { hashGenerator } = require("../General/hashGenerator");
const { PrismaClient } = require("../generated/prisma")

async function resetPassword(req,res) {
    try{
        const prisma = new PrismaClient();
        const newPassword = req.body.newPwd;
        const uname = req.body.uname
        const isLegit = await prisma.user.findFirst({
            where:{
                username:uname
            },
            select:{
                otp:{
                    select:{
                        status:true,
                        expiry:true
                    }
                }
            }
        })
        const utc = new Date();
        const now = new Date(utc.getTime()+5.5*60*60*1000);

        if(isLegit.otp.status==="PENDING"){
            const exp = new Date(isLegit.otp.expiry)
            if(exp >= now){
                const hashAndSalt = await hashGenerator(newPassword);
                await prisma.user.updateMany({
                    where:{
                        username:uname
                    },
                    data:{
                        hash:hashAndSalt.hash,
                        salt:hashAndSalt.salt
                    }
                })
                res.status(200).json({
                    msg:"Successful"
                })
                return
            }
            
        }
        res.status(200).json({
            err:"Odra fraud uh"
        })
        return
    }
    catch(err){
        console.log(err)
        res.status(200).json({
            err:"Some internal error..."
        })
    }
}

module.exports = {
    resetPassword
}