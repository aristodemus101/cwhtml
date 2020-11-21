const fs = require("fs");
let text = fs.readFileSync("kobe.txt","utf-8");
console.log(text);
text = text.replace("OOO","KObe");
console.log(text);
fs.writeFileSync("kobe2.txt",text)