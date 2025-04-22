import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {

    await prisma.user.createMany({
        data:[
            {
                username:"Santhosh",
                salt:"$2b$10$7r7F/C5h.gDeZQCBB9Sft.",
                hash: '$2b$10$7r7F/C5h.gDeZQCBB9Sft.BPFkp9EcXcLPwzQwBoxmKih/rDQr0Y2',
                email:"220701253@rajalakshmi.edu.in",
                role:"PROJECT_MANAGER"
            },
            {
                username:"Sarabish",
                salt:"$2b$10$7r7F/C5h.gDeZQCBB9Sft.",
                hash: '$2b$10$7r7F/C5h.gDeZQCBB9Sft.BPFkp9EcXcLPwzQwBoxmKih/rDQr0Y2',
                email:"220701234@rajalakshmi.edu.in",
                role:"TEAM_LEADER"
            },
            {
                username:"Senior",
                salt:"$2b$10$7r7F/C5h.gDeZQCBB9Sft.",
                hash: '$2b$10$7r7F/C5h.gDeZQCBB9Sft.BPFkp9EcXcLPwzQwBoxmKih/rDQr0Y2',
                email:"220701250@rajalakshmi.edu.in",
                role:"TEAM_LEADER"
            },
            {
                username:"RubenRaj",
                salt:"$2b$10$7r7F/C5h.gDeZQCBB9Sft.",
                hash: '$2b$10$7r7F/C5h.gDeZQCBB9Sft.BPFkp9EcXcLPwzQwBoxmKih/rDQr0Y2',
                email:"220701230@rajalakshmi.edu.in",
                role:"DEVELOPER"
            },
            {
                username:"SaiVishwa",
                salt:"$2b$10$7r7F/C5h.gDeZQCBB9Sft.",
                hash: '$2b$10$7r7F/C5h.gDeZQCBB9Sft.BPFkp9EcXcLPwzQwBoxmKih/rDQr0Y2',
                email:"220701239@rajalakshmi.edu.in",
                role:"DEVELOPER"
            },
            {
                username:"RubenRaj",
                salt:"$2b$10$7r7F/C5h.gDeZQCBB9Sft.",
                hash: '$2b$10$7r7F/C5h.gDeZQCBB9Sft.BPFkp9EcXcLPwzQwBoxmKih/rDQr0Y2',
                email:"220701230@rajalakshmi.edu.in",
                role:"PROJECT_MANAGER"
            }
        ]
    })
    
}


main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
