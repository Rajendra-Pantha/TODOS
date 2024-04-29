import { useEffect, useState } from 'react'
import Create from './Create'
import './Home.css'
const Home = () => {

    const [todos,setTodos]=useState([])
     const handleFetch=async()=>{
      const response = await fetch("http://localhost:3001/add",{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        },}) 
       
        if(response.ok){
         const data=await response.json()
          setTodos(data)
        }
    }
    useEffect(() => {
    handleFetch()
   }, [setTodos, todos]);
  const handleDelete= async (task)=>{
  const resp = await fetch('http://localhost:3001/delete',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({task:task})
    
    })
    if(resp.ok){
      setTodos(prevTodos => prevTodos.filter(todo => todo.task !== task));
    }
  } 
  
  return (
    <div className='main'>
        <div className='innermain'>
        <h2>Todo list</h2>
        <Create />
        {
           todos.length===0?<div className='norecord'>No record found</div> :
           todos.map((todo,i)=>(
            <div key={i} className='list'>
                {todo.task} <button onClick={()=>handleDelete(todo.task)}>delete</button>
            </div>)
            )
        }
  </div> 
   </div>
  )
}

export default Home