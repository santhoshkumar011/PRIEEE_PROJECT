const { PrismaClient } = require('../generated/prisma');
const { hashChecker } = require('../General/hashChecker');
const { hashGenerator } = require('../General/hashGenerator');

const prisma = new PrismaClient();

async function verifyOTPforLogin(req,res) {
    try{
        const st = await prisma.auth.findFirst({
            where:{
            email:req.body.email
            },
            include:{
                manager:{
                    select:{
                        id:true,
                        username:true
                    }
                },
                dev:{
                    select:{
                        id:true,
                        username:true
                    }
                },
                leader:{
                    select:{
                        id:true,
                        username:true
                    }
                }
            }
        })
        const user = await prisma.otp.findFirst({
            where:{
                authId:st.id
            }
        })
        if(!st || !user){
            res.status(200).json({
                err:"Invalid request"
            })
            return
        }
        else{
            const utc = new Date();
            const now = new Date(utc.getTime()+5.5*60*60*1000);
            const otpExpiry = new Date(user.expiry);
            if(user.otp===req.body.otp && now<otpExpiry){
                const exp = new Date(now.getTime()+60*60*1000);
                const session = await hashGenerator(toString(st.username)+toString(exp));
                const update = await prisma.otp.updateMany({
                    where:{
                        authId:st.id
                    },
                    data:{
                        status:"VERIFIED"
                    }
                })
                if(st.dev?.id){
                    id = st.dev.id;
                    uname = st.dev.username;
                    role="dev"
                    await prisma.developer.updateMany({
                        where:{
                            id:id
                        },
                        data:{
                            lastLogin:now
                        }
                    })
                    await prisma.session.deleteMany({
                        where:{
                            developerId:id
                        }
                    })
                    await prisma.session.create({
                        data:{
                            developerId:id,
                            expiry:exp,
                            session:session.hash
                        }
                    }) 
                }
                else if(st.leader?.id){
                    id = st.leader.id;
                    uname = st.leader.username;
                    role = "leader";
                    await prisma.teamLeader.updateMany({
                        where:{
                            id:id
                        },
                        data:{
                            lastLogin:now
                        }
                    })
                    await prisma.session.deleteMany({
                        where:{
                            leaderId:id
                        }
                    })
        
                    await prisma.session.create({
                        data:{
                            leaderId:id,
                            expiry:exp,
                            session:session.hash
                        }
                    }) 
                }
                else if(st.manager?.id){
                    id = st.manager.id;
                    uname = st.manager.username;
                    role = "manager"
                    await prisma.projectManager.updateMany({
                        where:{
                            id:id
                        },
                        data:{
                            lastLogin:now
                        }
                    })
                    await prisma.session.deleteMany({
                        where:{
                            managerId:id
                        }
                    })
                    await prisma.session.create({
                        data:{
                            managerId:id,
                            expiry:exp,
                            session:session.hash
                        }
                    }) 
                }
                
                res.status(200).json({
                    msg:"Success",
                    uname:uname,
                    session:session.hash
                })
            }
            
            else{
                res.status(200).json({
                    err:"OTP verificaion failed"
                })
            }
        }
    }
    catch (error){
        console.log(error);
        res.status(400).json({
            err:"Internal error"
        })
    }
}

module.exports = { 
    verifyOTPforLogin
}