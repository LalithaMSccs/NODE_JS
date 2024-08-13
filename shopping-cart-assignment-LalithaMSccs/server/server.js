import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
const app = express();
const port = 4000;

// app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(cors());



app.post("/login",(req,res)=>{
    const username=req.body.name;
    const password=req.body.password;
    console.log(req.body);
    if(username=="Lalitha" && password ==='Lali123'){
        const msg="Successfully logined"
        const show=false
        res.send({show,msg});
    }else{
        const msg="Invalid username or password"
        const show=true
        res.send({show,msg});
    }
})

app.listen(port,()=>{
    console.log("Server running on port 4000")
});