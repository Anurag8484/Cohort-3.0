const express = require('express');
const mongoose = require('mongoose');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/course');


const app = express();
app.use(express.json())


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);
 


app.listen(3000)