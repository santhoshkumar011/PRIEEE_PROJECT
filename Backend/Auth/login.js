
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
        const resp = await hashChecker(dbval.salt , dbval.hash , pwd)
    
        if(resp == 0 ){
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
            return
        }
        const now = new Date(utc.getTime()+5.5*60*60*1000);

        let role = "" ;
        let id  = ""; 
        let uname = "";

        if(dbval.dev?.id){
            id = dbval.dev.id;
            uname = dbval.dev.username;
            role="dev"
            await prisma.developer.updateMany({
                where:{
                    id:id
                },
                data:{
                    lastLogin:now
                }
            })
            await prisma.session.deleteMany({
                where:{
                    developerId:id
                }
            })
            await prisma.session.create({
                data:{
                    developerId:id,
                    expiry:exp,
                    session:session.hash
                }
            }) 
        }
        else if(dbval.leader?.id){
            id = dbval.leader.id;
            uname = dbval.leader.username;
            role = "leader";
            await prisma.teamLeader.updateMany({
                where:{
                    id:id
                },
                data:{
                    lastLogin:now
                }
            })
            await prisma.session.deleteMany({
                where:{
                    leaderId:id
                }
            })

            await prisma.session.create({
                data:{
                    leaderId:id,
                    expiry:exp,
                    session:session.hash
                }
            }) 
        }
        else if(dbval.manager?.id){
            id = dbval.manager.id;
            uname = dbval.manager.username;
            role = "manager"
            await prisma.projectManager.updateMany({
                where:{
                    id:id
                },
                data:{
                    lastLogin:now
                }
            })
            await prisma.session.deleteMany({
                where:{
                    managerId:id
                }
            })
            await prisma.session.create({
                data:{
                    managerId:id,
                    expiry:exp,
                    session:session.hash
                }
            }) 
        }
    
        


        res.status(200).json({
            msg:"Successful",
            session:session.hash,
            uname:uname,
            role:role
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