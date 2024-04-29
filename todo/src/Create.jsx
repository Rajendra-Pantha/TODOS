import  { useState } from 'react'
import './create.css'
const Create = () => {
  const[task,setTask]=useState('')

  const handleAdd=()=>{
    fetch("http://localhost:3001/add",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({ task: task })
    })
  }
  return (
    <div>
        <input value={task}  type='text'  onChange={(e)=>setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd} >Add</button>
    </div>
  )
}

export default Create