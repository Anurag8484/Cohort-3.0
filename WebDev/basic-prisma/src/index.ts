import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express()

// app.use(express());

app.get("/todos/:id", async (req,res)=>{
    const id = req.params.id;
    const users = await client.user.findFirst({
        where:{
            id:parseInt(id)
        },
        select:{
            todos: true,
            username: true,
            password: true
        }
    })
})


const client = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function createUser() {
  const user = await client.user.findFirst({
    where: {
      id: 1,
    },
    include:{
        todos: true
    }
  });

  console.log(user);
  
}

createUser();
