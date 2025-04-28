const { PrismaClient } = require("../generated/prisma")

async function sessionChecker(session) {

    try{
        const prisma = new PrismaClient();
        const ses = await prisma.session.findFirst({
            where:{
                session:session
            },
        })
        
        const utc = new Date();
        const now = new Date(utc.getTime()+5.5*60*60*1000);
        
        if(ses){
            const exp = new Date(ses.expiry)
            if(exp>=now){
                return({msg:"Successful" , session:ses})
            }
            await prisma.session.deleteMany({
                where:{
                    id:ses.id
                }
            })
            return({err:"time out"})
        }
        return({err:"wrong session"})
    }
    catch(err){
        console.log(err)
        return ({err:"some internal error"})
    }
    
}

module.exports = {
    sessionChecker
}