import express from "express"
import cors from "cors"


let usersdata=[]


const app=express();
const port=3000;
let check=false;

app.use(cors())
 app.use(express.json())

app.post("/signup",(req,res)=>{
    if(req.boby!==usersdata.includes(req.body) && req.body.name !== "" && req.body.email !== "" && req.body.password !== ""){
  usersdata.push(req.body)
  res.sendStatus(200);
  console.log("data",usersdata);
    }
    else
    {
        
    }
})

app.post("/singin",(req,res)=>{
    check=usersdata.includes(req.body)
    res.send(check)
})


app.listen(port,()=>{
    console.log(`server is starting on http://localhost:${port}`);
})