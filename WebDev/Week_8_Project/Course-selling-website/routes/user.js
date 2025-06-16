const { Router } = require("express")
const userRouter = Router();
const { userModel } = require('../db')



userRouter.post("/signup", async (req, res) => {
    res.json({
        message:"User signed up"
    })
});

userRouter.post("/signin", async (req, res) => {
    res.json({
      message: "User signed in",
    });
});

userRouter.get("/purchases", async (req, res) => {
    res.json({
      message: "User purchases",
    });
});


module.exports={
    userRouter: userRouter
}