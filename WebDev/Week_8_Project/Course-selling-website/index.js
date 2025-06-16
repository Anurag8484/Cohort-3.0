const express = require('express');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/course');
dotenv.config();

const secret = process.env.JWT_SECRET;
const port = process.env.PORT;

async function connectDb() {
  await mongoose.connect(process.env.MONGO_URI);
}



const app = express();
app.use(express.json())


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
// app.use("/api/v1/admin", adminRouter);
 

function main(){
    connectDb();
    app.listen(port)
    console.log(`listening on port ${port}`)
}


main();