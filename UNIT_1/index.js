const fs=require("fs");

// fs.writeFile("message.txt","Hello from expressJS!",(err)=>{
//     if(err) throw err;
//     console.log("The file has been saved");
// })
fs.appendFile("message.txt","hello from NodeJS",(err)=>{
    if (err) throw err;
    console.log("the file appended");
})

fs.readFile("message.txt",'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})