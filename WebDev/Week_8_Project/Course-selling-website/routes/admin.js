const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require('../db')
const bcrypt  = require('bcrypt')
const { z } = require('zod');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

admin_secret = process.env.JWT_ADMIN_SECRET;

adminRouter.post("/signup", async (req, res) => {
  
  const reqBody = z.object({
    email: z.string().min(3).max(20).email(),
    password: z.string().min(3).max(20),
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
  });

  if (!reqBody.safeParse(req.body)) {
    return res.status(500).json({
      error: SafeData.error.issues[0].message,
    });
  }

  const { email, password, firstName, lastName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 3);

  try {
    await adminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({
      message: "Admin signed up!",
    });
  } catch (error) {
    res.json({
      error: `${error}`,
    });
  }




});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  let user;
  let passwordMatch;

  try {
    user = await adminModel.findOne({
      email: email,
    });
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    passwordMatch = await bcrypt.compare(password, user.password);
  } catch (error) {
    res.json({
      error: `Error finding in DB ${error}`,
    });
    return;
  }
  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      admin_secret
    );
    res.json({
      message: "Admin Signed In!",
      token: token,
    });
  } else {
    res.status(403).json({
      error: "Incorrect Credentials!",
    });
  }
});


adminRouter.get("/bulk", async (req, res) => {
  res.json({
    message: "AAll courses",
  });
});


adminRouter.post("/course", async (req, res) => {
  res.json({
    message: "Admin signed in",
  });
});
adminRouter.put("/course", async (req, res) => {
  res.json({
    message: "Admin signed in",
  });
});


module.exports={
  adminRouter: adminRouter
}