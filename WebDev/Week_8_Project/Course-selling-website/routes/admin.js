const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require('../db')
const { z } = require('zod');


adminRouter.post("/signup", async (req, res) => {
  
  const reqBody = z.object({
    email: z.string().min(3).max()
  })




});

adminRouter.post("/signin", async (req, res) => {
  res.json({
    message: "Admin signed in",
  });
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