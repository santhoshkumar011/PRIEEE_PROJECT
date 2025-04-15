
const { PrismaClient } = require("../generated/prisma")


async function login(req,res) {
    const prisma = new PrismaClient();
    const uname = req.body.uname;
    const pwd = req.body.pwd;
    const dbval = await prisma.user.findFirst({
        where:{
            username:uname
        },
        select:{
            salt:true,
            hash:true
        }
    })
}

module.exports = {
    login
}