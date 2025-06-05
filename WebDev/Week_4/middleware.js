const express = require('express');

const app = express();

function isOld(age){
    if (age>= 14){
        return true;
    }else{
        return false;
    }
}

function isOldMiddleware(req,res,next){
    const age = req.query.age;
    if (age>=14){
        next();
    }else{
        res.json({
            msg:"Not older yet"
        })
    }
}


app.use(isOldMiddleware)

app.get("/ride1",function(req,res){
        res.json({
            msg: "You have riden Ride 1"
        })
})
app.get("/ride2",function(req,res){
        res.json({
            msg: "You have riden Ride 2"
        })
})

app.listen(3000)