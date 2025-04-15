const { PrismaClient } = require("../generated/prisma")

async function resetPassword(req,res) {
    try{
        const prisma = new PrismaClient();
        const newPassword = req.body.newPwd;
        
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    resetPassword
}