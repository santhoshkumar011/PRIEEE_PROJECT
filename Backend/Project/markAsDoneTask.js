const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function markAsDoneTask(req,res) {
    try{
        let data = req.body.data;
        

        console.dir(data)
        
        
        
        await prisma.task.updateMany({
            where:{
                id:data.id
            },
            data:{
                status:data.status
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
    markAsDoneTask
}