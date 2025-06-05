const express = require("express");
const app = express();

var users = [{
    name: "Anurag",
    kidneys: [{
        healthy : false
    }]
}];

app.use(express.json());

app.get("/", function(req,res){
    const ukids = users[0].kidneys;
    const noOfKidneys = ukids.length;
    let noHealthyKids = 0;

    for (let i=0;i<ukids.length;i++){
        if (ukids[i].healthy){
            noHealthyKids++
        }
    }

    const noUnHealthyKids = noOfKidneys - noHealthyKids;
    res.json({
        noOfKidneys,
        noHealthyKids,
        noUnHealthyKids
    })

})

app.post("/",function(req,res){
    const isHealthy= req.body.isHealthy;
    users[0].kidneys.push({healthy:isHealthy})
    res.json({
        msg: "Kidney Added!"
    })
});

app.put("/",function(req,res){
    for (let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg:"Updated!"
    })
});

app.delete("/",function(req,res){
    const newKids = [];
    let atleast = false;
    for (let i =0; i<users[0].kidneys.length;i++){
        if (!users[0].kidneys[i].healthy) {
            atleast = true
        }
    }

    if(atleast){
        
        for (let i =0; i<users[0].kidneys.length;i++){
            if (users[0].kidneys[i].healthy) {
              newKids.push({
                healthy: true,
              });
            }
        }
        users[0].kidneys = newKids;
        res.json({msg:"Deleted!"})
    }else{
        res.status(411).json({
            msg: "You have no bad Kidneys"
        });
    }
})

app.listen(3001)