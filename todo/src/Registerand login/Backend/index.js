const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const loginmodel=require('./Models/Login')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/newregistration')
app.post("/register",async function(req,res){
    try{
        const {username,useremail,userpassword}=req.body
  await  loginmodel.create({
        username:username,
    email:useremail,
    password:userpassword,
    })
    
}
    catch(err){
console.log(err)
    }
})

app.post('/login',async function(req,res){
try{const{username,userpassword}=req.body
await loginmodel.findOne({username:username}).then((user)=>{
    if(user.password===userpassword){
        console.log("Login Successfully")
    }
    else{
        console.log("Login failed")
    }
})}catch(err){
    console.log(err)
}
   
   
})

app.listen(3000,()=>{
    console.log("running...")
})