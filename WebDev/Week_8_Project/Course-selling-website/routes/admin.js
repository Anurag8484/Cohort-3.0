const { Router } = require('express');
const adminRouter = Router();
const { adminModel, courseModel } = require('../db')
const bcrypt  = require('bcrypt')
const { z } = require('zod');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const { adminMiddleware } = require('../middleware/admin')
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

adminRouter.post("/course",adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const {title, description, imageUrl, price} = req.body;

  try {
    const course = await courseModel.create({
      title:title,
      description:description,
      imageUrl: imageUrl,
      price: price,
      creatorId: adminId
    });
    res.json({
      message:"Course added!",
      course_id:course._id
    });
  } catch (error) {
    res.json({
      error:`Error adding to DB: ${error}`
    })    
  }


});

adminRouter.put("/course",adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.find({
    _id:courseId,
    creatorId: adminId 
  })
  if (course.length < 1) {
    res.json({
      error: "Course not found!",
    });
    return;
  }


  try {
    const course = await courseModel.updateOne(
      {
        _id: courseId,
        creatorId: adminId
      },
      {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
      creatorId: adminId,
    });
    res.json({
      message: "Course Updated!",
      course_id: course._id,
    });
  } catch (error) {
    res.json({
      error: `Error changing edits to DB: ${error}`,
    });
  }
});


adminRouter.get("/bulk",adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  try {
    const courses = await courseModel.find({
      creatorId:adminId
    });
    
    if (courses.length > 0){
      res.json({
        courses: courses
      });
      return;
    }else{
      res.json({
        message:"There are currently 0 courses. Please add one to view."
      });
      return;
    }
  } catch (error) {
    res.json({
      error:`Error fetching all courses: ${error}`
    });
    return;
  }



});




module.exports={
  adminRouter: adminRouter
}