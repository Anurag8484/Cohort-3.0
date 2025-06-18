const { Router } = require("express")
const userRouter = Router();
const { userModel } = require('../db');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
user_secret = process.env.JWT_USER_SECRET;




const { z } = require('zod');
const { userMiddleware } = require("../middleware/user");



userRouter.post("/signup", async (req, res) => {

    const reqBody = z.object({
        email: z.string().min(3).max(20).email(),
        password: z.string().min(3).max(20),
        firstName: z.string().min(3).max(20),
        lastName: z.string().min(3).max(20),
    })

    if(!(reqBody.safeParse(req.body))){
        return res.status(500).json({
          error: SafeData.error.issues[0].message,
        });
    };

    const { email,password,firstName,lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password,3);

    try {
        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName,
        });
        res.json({
            message: "User signed up!"
        })
    } catch (error) {
        res.json({
            error: `${error}`
        })
    }

});

userRouter.post("/signin", async (req, res) => {

    const { email, password } = req.body;
    let user;
    let passwordMatch;

    try {
        user = await userModel.findOne({
            email: email
        });
        if (!user) {
          return res.status(404).json({
            error: "User not found",
          });
        }
        passwordMatch =   await bcrypt.compare(password, user.password);
    } catch (error) {
        res.json({
            error: `Error finding in DB ${error}`
        });
        return;
        
    }
    if (passwordMatch) {
    const token = jwt.sign(
        {
        id: user._id.toString()
        },
        user_secret
    );
    res.json({
        message: "User Signed In!",
        token: token,
    });
    } else {
    res.status(403).json({
        error: "Incorrect Credentials!",
    });
    }
});

userRouter.get("/purchases",userMiddleware, async (req, res) => {
   const userId = req.userId;
   try {
       const purchase = await purchaseModel.find({
        userId,
       });
       res.json({
        purchasedCourses:purchase
       });
       return;
   } catch (error) {
    res.json({
        error:`Error fetching purchased courses: ${error}`
    });
    return;
   }
});


module.exports={
    userRouter: userRouter
}