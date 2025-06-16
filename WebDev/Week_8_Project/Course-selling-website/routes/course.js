const { Router } = require('express');
const courseRouter = Router();
const { courseModel } = require("../db");


courseRouter.post("/purchase", async (req, res) => {

});

courseRouter.get("/preview", async (req, res) => {

});



module.exports = {
  courseRouter: courseRouter,
};