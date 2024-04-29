const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app=express()
const todos=require('./Models/Todo')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')
const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
  
  db.once('open', () => {
    console.log('MongoDB connected successfully');
  });
  
  db.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });
  

app.post('/add',function(req,res){
    console.log(req)
    const task = req.body.task; 
    todos.create({
        task:task
    })
})
app.get('/add', async function(req, res) {
  try {
    const allTodos = await todos.find({}).exec();
    res.json(allTodos);
  } catch (err) {
    console.error("Internal error:", err);
   
  }
});

app.post('/delete', async function(req,res){
 try{
  const task = req.body.task
  
  await todos.deleteOne({task:task})}
  catch(err){
    console.log(err)
  }
} )
app.listen(3001,()=>{
    console.log("Server Running..")
})
