import { Client } from "pg";
import express from "express";


const app = express();
app.use(express.json())

const pgClient = new Client({
  user: "neondb_owner",
  password: "npg_QGz0SZM9RVkT",
  port: 5432,
  host: "ep-nameless-rice-adtadpru-pooler.c-2.us-east-1.aws.neon.tech",
  database: "neondb",
  ssl:{
    rejectUnauthorized: true
  }
});
pgClient.connect();

app.post('/signup', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
try {
    const response = await pgClient.query(`INSERT INTO users (username, password) VALUES ('${username}', '${password}')`)
    res.json({
        message:"You have Signed in"
    })
} catch (error) {
      res.json({
        message:`Error while signing up: ${error}`
      })  
}
})


app.listen(8000)