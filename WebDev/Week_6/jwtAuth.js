const express =  require('express');
const app = express();
const jwt = require("jsonwebtoken")
const JWT_SECRET = "randomPassword"
app.use(express.json());

const users = [];

app.post("/signup", function(req,res){
    const username = req.body.username;
    const pass = req.body.password;

    if (users.find( u => u.username === username)){
        res.send({
            msg: "Already Exists"
        })
    }
    users.push({
        username: username,
        password: pass
    })
    res.json({
        message:"You are signed up"
    })
    console.log(users);

});


app.post("/signin",function(req,res){

    const username = req.body.username;
    const pass = req.body.password;
    const foundUser = users.find(u => u.username === username && u.password === pass)
    if (foundUser){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"User Not found, // Invalid Creds"
        })
    }

    console.log(users)

});


app.get("/me",function(req,res){
    const token = req.headers.authorization;   //jwt token
    const decodedToken = jwt.verify(token,JWT_SECRET); // {username:"Anurag etc."}
    const username = decodedToken.username
    const user = users.find(u => u.username === username);
    if (user){
        res.json({
            username:user.username,
            password:user.password
        })
    }else{
        res.json({
            message:"Invalid Token"
        })
    }
})

app.listen(3000);