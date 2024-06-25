const express = require("express")
const app=express()


app.get("/server",(req,res)=>{
      res.send("server running on port 3000")
})
app.listen(3000)