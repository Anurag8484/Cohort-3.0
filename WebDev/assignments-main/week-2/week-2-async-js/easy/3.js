const fs = require("fs");

fs.readFile('example.txt','utf-8',(err,data)=>{
    if (err){
        if (err.code === 'ENOENT'){
            console.error("File not found")
        }
        else{
            console.error("Error reading file")
        }
    }
    console.log(data)   
});

const expensiveOperation = ()=>{
    let c = 0
    for (let i = 0; i<=10000000;i++){
        c+=i
    }
    console.log("Expensive done")
}

expensiveOperation()



