import React from 'react'
import Navbar from './components/navbar.jsx'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"



const App = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const handleEdit = (id)=>{
    console.log(`This is ${id}`)
      let t = todos.filter(i=>i.id===id)
      settodo(t[0].todo)
      let newtodos = todos.filter(item=>{
        return item.id !==id
      })
      settodos(newtodos)

  }
  const handleDelete = (id)=>{
    if (confirm()==true){
      let newtodos = todos.filter(item=>{
        return item.id !==id
      })
      settodos(newtodos)}
    }
  const confirm = ()=>(
     window.confirm("Are you sure you want to delete")
  )
  const handleAdd = ()=>{
      settodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
      settodo("")
  }
  const handleChange = (e)=>{
      settodo(e.target.value)
  }
  const handlecheck =(e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id===id;
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted=!newtodos[index].isCompleted;
    settodos(newtodos);
    console.log(newtodos)
  }
  return (
    <>
      <Navbar />
      <div className="container bg-violet-100 my-5 mx-auto rounded-xl p-5 min-h-[80vh]">
      <div className="addtodo">
      <h2 className='text-lg font-bold'>Add Todo</h2>
      <div className='input-field'>
      <input onChange={handleChange} value={todo} className='bg-white rounded-md w-80' type="text" />
      <button onClick={handleAdd} className='cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 rounded-md text-white mx-3'>SAVE</button>
      </div>
      </div>
      <h2 className='text-lg font-bold'>Your Todos</h2>
      <div className="todos">
        {todos.length===0 && <div className='m-5 text-2xl'>No Todo To Display</div>}
      {todos.map(item=> {
      return (
      <div key={item.id} className="todo flex w-1/3  justify-between m-2 align-items: center;">
        <div className="flex gap-5 items-center">
        <input className='w-5 h-4' onChange={handlecheck} type="checkbox" value={item.isCompleted} name={item.id} id='' />
        <div  className={` text-xl ${item.isCompleted?"line-through":""}`} >{item.todo}</div>
        </div>
        <div className="buttons">
          <button onClick={(e)=>handleEdit(item.id)} className='cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 rounded-md text-white mx-1'>Edit</button>
          <button onClick={(e)=>{handleDelete(item.id)}} className='cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 rounded-md text-white mx-1'>Delete</button>
        </div>

      </div>)
})}      
</div>
</div>
    </>
  )
}

export default App