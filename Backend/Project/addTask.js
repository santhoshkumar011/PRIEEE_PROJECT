const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function addTask(req,res) {
    try{
        let data = req.body.data;
        delete data.id
        data.status = "PENDING"

        // console.dir(data)
        
        await prisma.task.create({
            data:{
                ...data,

            }
        })
        await prisma.project.updateMany({
            where:{
                id:data.projectId
            },
            data:{
                isTaskCompleted:"YES",
                status:"IN_PROGRESS"
            }
        })
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
    addTask
}