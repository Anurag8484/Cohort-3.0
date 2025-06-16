const { Router } = require('express');
const adminRouter = Router();



adminRouter.post("/signup", async (req, res) => {
  res.json({
    message: "Admin signed up",
  });
});

adminRouter.post("/signin", async (req, res) => {
  res.json({
    message: "Admin signed in",
  });
});


adminRouter.get("/course", async (req, res) => {
  res.json({
    message: "Admin signed in",
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