const fs = require("fs")

const data = fs.readFileSync('example.txt','utf-8')
const out = data.replace(/\s{2,}/g, " ").trim(); 

fs.writeFileSync("example2.txt", out, "utf-8");
console.log("Done")