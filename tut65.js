// const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require("constants")

// Sync or Blocking  -- line by line execution
// Async or non-blocking -- LBL not guranteed callbacks will fire

const fs = require("fs");
 fs.readFile("kobe.txt","utf-8", (a,b)=>{
    console.log(a,b);
});
console.log("This is a message");
