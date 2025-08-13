import { PrismaClient } from "@prisma/client";


const client = new PrismaClient();

async function createDummyUser(){

   await client.user.create({
        data:{
            username:"DummyUser",
            age:21,
            password:"213456",
            city:"Silicon Valley",
            todos:{
                create:{
                    description:"Go to Bombay",
                    title:"Travel",
                    done:false
                }
            }
        }
    })
}

createDummyUser();