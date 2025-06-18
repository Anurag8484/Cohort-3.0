const { Router } = require('express');
const courseRouter = Router();
const { courseModel, purchaseModel } = require("../db");
const { userMiddleware } = require('../middleware/user');


courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  try {
    await purchaseModel.create({
      userId,
      courseId
    });
    res.json({
      message:"Course Purchased !!!"
    });
    return;
  } catch (error) {
    req.json({
      error:`Error purchasing course: ${error}`
    });
    return;
  }
});

courseRouter.get("/preview", async (req, res) => {
  try {
    const courses = await courseModel.find();

    if (courses.length > 0) {
      res.json({
        courses: courses,
      });
      return;
    } else {
      res.json({
        message: "There are currently 0 courses.",
      });
      return;
    }
  } catch (error) {
    res.json({
      error: `Error fetching all courses: ${error}`,
    });
    return;
  }

});



module.exports = {
  courseRouter: courseRouter,
};