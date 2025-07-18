const express =  require('express');
const app = express();
app.use(express.json());

const users = [];

function generateToken(){
    return Math.random()
}


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
});


app.post("/signin",function(req,res){

    const username = req.body.username;
    const pass = req.body.password;
    const foundUser = users.find(u => u.username === username && u.password === pass)
    if (foundUser){
        const token = generateToken();
        foundUser.token = token;
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
    const token = parseFloat(req.headers.authorization);
    const user = users.find(u => u.token === token);
    if (user){
        res.json({
            username:user.name,
            password:user.password
        })
    }else{
        res.json({
            message:"Invalid Token"
        })
    }
})

app.listen(3000);