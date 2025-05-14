const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function markAsDone(req,res) {
    try{
        let data = req.body.data;
        

        console.dir(data)
        
        
        // await prisma.project.updateMany({
        //     where:{
        //         id:data.projectI
        //     },
        //     data:{
        //         isTaskCompleted:"YES",
        //         status:"IN_PROGRESS"
        //     }
        // })
        res.status(200).json({
            msg:"Successful"
        })

        return
    }
    catch(err){
        console.log(err);
        res.status(200).json({
            err:"Some internal error.. try again!"
        })
    }
}

module.exports = {
    markAsDone
}