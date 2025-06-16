const { Router } = require('express');
const courseRouter = Router();
const { courseModel } = require("../db");


courseRouter.post("/purchase", async (req, res) => {

});

courseRouter.post("/signup", async (req, res) => {

});

courseRouter.post("/courses", async (req, res) => {

});



module.exports = {
  courseRouter: courseRouter,
};