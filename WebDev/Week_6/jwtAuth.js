const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();
const JWT_SECRET = "HeyIAMHere"

app.use(express.json())

const users = []


function auth(req, res, next) {
  const token = req.headers.token;

  if (token) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
        req.user = users.find((u) => u.username === decodedData.username);
        next();
        } else {
        res.json({
            Error: "Invalid Token",
        });
        return;
    }
  } else {
    res.json({
      Error: "Please Login Before Moving further",
    });
    return;
  }

   
} 

app.post('/signup',function(req,res) {
    const username = req.body.username
    const password = req.body.password
    if (users.find(u => u.username === username)){
        res.json({
            Message:"Already Exists"
        })
        return;
    }else{
        users.push({
            username:username,password:password
        })
        res.json({
            Message:"Successfully Registered"
        })
    }
})

app.post('/signin', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(u => u.username === username && u.password === password)

    if(!foundUser){
        res.json({
            Message:"Incorrect Creds"
        })
        return;
    }else{
        const token = jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            Token:token
        })
    }
})



app.use(auth)

app.get('/me',function(req,res){
    const user = req.user;
      res.json({
        Username: user.username,
        Pasword: user.password
      })
})


app.get('/greet',function(req,res){
    const user = req.user;
    res.json({
        Greetings: `Hey ${user.username}!, Welcome to Web Dev CoHort 3.0..`
    })
})


app.listen(3000)