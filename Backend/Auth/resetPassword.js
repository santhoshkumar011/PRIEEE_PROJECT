const { hashGenerator } = require("../General/hashGenerator");
const { PrismaClient } = require("../generated/prisma")

async function resetPassword(req,res) {
    try{
        const prisma = new PrismaClient();
        const newPassword = req.body.newPwd;
        const uname = req.body.uname
        setTimeout(()=>{
            res.status(200).json({
        msg:"Successful"
       })
        },2000)
       
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