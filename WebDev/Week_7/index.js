const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const { default: mongoose, connect } = require("mongoose");
const JWT_SECRET = "veyassojdhhhd"
const app = express();
app.use(express.json());

async function connectToDB(){
    try {
        await mongoose.connect("mongodb+srv://anurag:8484@cluster0.u7mqesb.mongodb.net/MyTodo");
    } catch (error) {
        console.error(`Error connecting to DB ${error}`)
    }
}

connectToDB();



app.post("/signup",async function(req,res){
    
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name
    try {
        await UserModel.create({
        email: email,
        password: password,
        name: name
        });
    } catch (error) {
        console.log(error)        
        return;
    }
    res.json({
        message:"You are Signed Up"
    })

});

app.post("/signin",async function(req,res){
const email = req.body.email;
const password = req.body.password;
let user;

try {
   user = await UserModel.findOne({
      email: email,
      password: password,
    });
    
} catch (error) {
    console.log(`Error when finding in DB: ${error}`);   
}

if (user){
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },JWT_SECRET);
    res.json({
        token:token
    });
}else{
    res.status(403).json({
        error: "Incorrect Creds."
    })
}
});

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if (decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            error:"Incorrect credentials!"
        })
    }
}

app.use(auth);

app.post("/todo",async function(req,res){
    const userId = req.userId;
    const title = req.body.title;
    try {
        await TodoModel.create({
            title: title,
            done: false,
            userId: userId
        })
    } catch (error) {
        console.error(`Error creating collection: ${error}`)
    }
    res.json({
        message:"Task created"
    })
}); 

app.get("/todos",function(req,res){
    const userId = req.userId;
    res.json({
      id: userId,
    });
});


app.listen(3000);