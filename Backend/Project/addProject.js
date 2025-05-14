const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function addProject(req,res) {
    try{
        let data = req.body.data;
        delete data.id
        delete data.tasks
        data.storyPoints = parseInt(data.storyPoints)
        await prisma.project.create({
            data:{
                ...data,

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
    addProject
}