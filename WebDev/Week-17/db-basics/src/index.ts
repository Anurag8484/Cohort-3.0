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
  ssl: {
    rejectUnauthorized: false
  }
});
pgClient.connect();

app.post('/signup', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
try {

  const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING id;`
  const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1,$2,$3,$4,$5)`

  await pgClient.query('BEGIN;')
  
  const response = await pgClient.query(insertQuery,[username, email, password]);
  const user_id = response.rows[0].id;
  const addressRespons = await pgClient.query(addressInsertQuery,[city,country,street,pincode, user_id])

  await pgClient.query('COMMIT;')

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