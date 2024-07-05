import express from "express"
import cors from "cors"


let usersdata=[{name: "1",email: "1",password: "1"}]


const app=express();
const port=3000;

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
let filterduser = []
app.post("/singin",(req,res)=>{
   filterduser=usersdata.map((data)=>{
    console.log("This is data",data)
    return (
        {
            email: data.email,
            password: data.password
         }
 )
 })
 usersdata.forEach((element) => {
    if(element.email === req.body.email && element.password === req.body.password){
        res.sendStatus(200)
    }
    else{
        if(element.email !== req.body.email || element.password !== req.body.password){
            res.sendStatus(404)
        }
    }
 });

  
})


app.listen(port,()=>{
    console.log(`server is starting on http://localhost:${port}`);
})