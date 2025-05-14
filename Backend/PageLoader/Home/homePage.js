const { sessionChecker } = require("../../General/sessionChecker");
const { PrismaClient } = require("../../generated/prisma")

async function homePage(req,res) {
    const prisma = new PrismaClient();
    
    try{
        const session = req.body.session;
        const ses = await sessionChecker(session)

        if(ses.err){
            res.status(200).json({
                err:"Invalid session"
            })
            return
        }
        if(ses.session.developerId){

            const data = await prisma.developer.findFirst({
                where:{
                    id:ses.session.developerId
                },
                include:{
                    tasks:{
                        include:{
                            project:{
                                include:{
                                    teamLeader:{
                                        select:{
                                            username:true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })

            res.status(200).json({
                msg:"Successful",
                data:data,
                role:"DEV"
            })
            return

        }
        else if(ses.session.managerId){

            const data = await prisma.projectManager.findFirst({
                where:{
                    id:ses.session.managerId
                },
                include:{
                    projects:{
                        include:{
                            tasks:true
                        }
                    },
                    teamLeaders:{
                        select:{
                            username:true,
                            id:true,
                            lastLogin:true,
                            
                        }
                    }
                }
            })

            res.status(200).json({
                msg:"Successful",
                data:data,
                role:"MG"
            })

            return

        }
        else if(ses.session.leaderId){

            const data = await prisma.teamLeader.findFirst({
                where:{
                    id:ses.session.leaderId
                },
                include:{
                    projects:{
                        include:{
                            tasks:true
                        }
                    },
                    developers:true
                }
            })

            res.status(200).json({
                msg:"Successful",
                data:data,
                role:"TL"
            })

        }
        res.status(200).json({
            err:"Nee enna entha category la yum vara matra"
        })
    }
    catch(err){
        console.log(err);
        res.status(200).json({
            err:"Some internal error.. try again"
        })
    }

}

module.exports = {
    homePage
}