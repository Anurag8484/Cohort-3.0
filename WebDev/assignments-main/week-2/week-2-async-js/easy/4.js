const fs = require('fs');
fs.appendFile('example.txt','Hello from 4.js','utf-8',(err) => {
    if (err){console.error("Error")}
    console.log("done")
})