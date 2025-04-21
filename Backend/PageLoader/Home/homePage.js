const { PrismaClient } = require("../../generated/prisma")

async function homePage(req,res) {
    const prisma = new PrismaClient();
    
}

module.exports = {
    homePage
}