
const { hashChecker } = require("../General/hashChecker");
const { hashGenerator } = require("../General/hashGenerator");
const { PrismaClient } = require("../generated/prisma")


async function login(req,res) {

    try{
        const prisma = new PrismaClient();
        const email = req.body.email;
        const pwd = req.body.password;
        const dbval = await prisma.auth.findFirst({
            where:{
                email:email
            },
            select:{
                salt:true,
                hash:true,
                id:true,
                manager:{
                    select:{
                        id:true,
                        username:true
                    }
                },
                dev:{
                    select:{
                        id:true,
                        username:true
                    }
                },
                leader:{
                    select:{
                        id:true,
                        username:true
                    }
                }
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
    
        const session = await hashGenerator(toString(email)+toString(exp))
    
    
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
        const now = new Date(utc.getTime()+5.5*60*60*1000);

        await prisma.user.updateMany({
            where:{
                id:dbval.id
            },
            data:{
                lastLogin:now
            }
        })
        res.status(200).json({
            msg:"Successful",
            session:session.hash,
            uname:dbval.username
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