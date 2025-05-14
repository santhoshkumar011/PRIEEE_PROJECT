const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function addTask(req,res) {
    try{
        let data = req.body.data;
        delete data.id

        console.dir(data)
        
        // await prisma.project.create({
        //     data:{
        //         ...data,

        //     }
        // })
        res.status(200).json({

            err:"Sry error"
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