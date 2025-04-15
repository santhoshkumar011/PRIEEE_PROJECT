
const { hashChecker } = require("../General/hashChecker");
const { hashGenerator } = require("../General/hashGenerator");
const { PrismaClient } = require("../generated/prisma")


async function login(req,res) {

    try{
        const prisma = new PrismaClient();
        const uname = req.body.uname;
        const pwd = req.body.pwd;
        const dbval = await prisma.user.findFirst({
            where:{
                username:uname
            },
            select:{
                salt:true,
                hash:true,
                id:true
            }
        })
        const res = await hashChecker(dbval.salt , dbval.hash , pwd)
    
        if(res == 0 ){
            res.status(200).json({
                err:"invalid login password mismatch"
            })
            return
        }
    
        const utc = new Date();
        const exp = new Date(utc.getTime()+7.5*60*60*1000);
    
        const session = await hashGenerator(toString(uname)+toString(exp))
    
    
        if(session.err){
            res.status(200).json({
                err:"Some internal error, try logging again"
            })
        }
    
        await prisma.session.create({
            data:{
                userId:dbval.id,
                expiry:exp,
                session:session.hash
            }
        }) 
    
        res.status(200).json({
            msg:"Successful",
            session:session.hash
        })
    }
    catch(err){
        console.log(err)
        res.status(200).json({
            err:"Internal error... try again after some time"
        })
    }
    

}

module.exports = {
    login
}