const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {


    await prisma.project.create({
        data:{
            name:"Erp Platform",
            description:"This is the erp portal for REC - A Responsive website for both mobile and phone",
            storyPoints:500,
            status:"NOT_STARTED",
            managerId:1,
            leaderId:1
        }
    })
    
    


    // await prisma.auth.updateMany({
    //     where:{
    //         id:7
    //     },
    //     data:{
    //         role:"DEVELOPER"
    //     }
    // })
    

    // const op = await prisma.auth.findMany()
    // console.log(op)

    // await prisma.developer.create({
    //     data:{
    //         username:"Safeek",
    //         authId:7,
    //         teamLeaderId:2
        
    //     }
    // })


    // await prisma.auth.createMany({
    //     data:[
    //         {
    //             hash: '$2b$10$rzbAjimCrNFSfw/WMKYVJOmE7O756fWBMA0op60.B3H8bsy2TwE.i',
    //             salt: '$2b$10$rzbAjimCrNFSfw/WMKYVJO',
    //             email:"220701239@rajalakshmi.edu.in"
    //         },
    //         {
    //             hash: '$2b$10$rzbAjimCrNFSfw/WMKYVJOmE7O756fWBMA0op60.B3H8bsy2TwE.i',
    //             salt: '$2b$10$rzbAjimCrNFSfw/WMKYVJO',
    //             email:"220701234@rajalakshmi.edu.in"
    //         },
    //         {
    //             hash: '$2b$10$rzbAjimCrNFSfw/WMKYVJOmE7O756fWBMA0op60.B3H8bsy2TwE.i',
    //             salt: '$2b$10$rzbAjimCrNFSfw/WMKYVJO',
    //             email:"220701230@rajalakshmi.edu.in"
    //         },
    //         {
    //             hash: '$2b$10$rzbAjimCrNFSfw/WMKYVJOmE7O756fWBMA0op60.B3H8bsy2TwE.i',
    //             salt: '$2b$10$rzbAjimCrNFSfw/WMKYVJO',
    //             email:"220701253@rajalakshmi.edu.in"
    //         },
    //         {
    //             hash: '$2b$10$rzbAjimCrNFSfw/WMKYVJOmE7O756fWBMA0op60.B3H8bsy2TwE.i',
    //             salt: '$2b$10$rzbAjimCrNFSfw/WMKYVJO',
    //             email:"220701250@rajalakshmi.edu.in"
    //         },
    //         {
    //             hash: '$2b$10$rzbAjimCrNFSfw/WMKYVJOmE7O756fWBMA0op60.B3H8bsy2TwE.i',
    //             salt: '$2b$10$rzbAjimCrNFSfw/WMKYVJO',
    //             email:"220701224@rajalakshmi.edu.in"
    //         },
    //         {
    //             hash: '$2b$10$rzbAjimCrNFSfw/WMKYVJOmE7O756fWBMA0op60.B3H8bsy2TwE.i',
    //             salt: '$2b$10$rzbAjimCrNFSfw/WMKYVJO',
    //             email:"220701236@rajalakshmi.edu.in"
    //         },
    //     ]
    // })
}


main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });