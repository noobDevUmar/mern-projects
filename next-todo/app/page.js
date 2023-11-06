'use client'
import Image from 'next/image'
import { useState } from 'react';
import Items from './components/Items';

export default function Home() {
  const [tasks, settasks] = useState([]);

  const [category, setCategory] = useState("");
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");


  let addtask = (e)=>{
    e.preventDefault()
    let todo = {
      id: tasks.length===0? 1 : tasks[tasks.length-1].id + 1 ,
      task:task,
      category:category,
      desc,
      iscompleted:false
    }
    let adddedarray = [...tasks,todo]
    settasks(adddedarray)
    setCategory("");
    settask("");
    setdesc("");
  }

  let removetask = (id)=>{
 
    let newarray =tasks.filter((item)=>item.id!==id)
    settasks(newarray)
    
  }

  let updatetask = (taskId)=>{
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, iscompleted: !task.iscompleted };
      }
      return task;
    });
    settasks(updatedTasks);
  };
  return (
    <div className="h-screen max-w-[90vw] mx-auto">
      <h1 className="text-center bg-black text-white text-4xl py-2 mb-10">
        {" "}
        Simple Todo App
      </h1>

      <div className="bg-slate-400 w-full items-center flex justify-center p-5 text-semibold text-lg">
        <form>
          <label> Category </label>
          <input  placeholder='Enter Category' value={category} onChange={(e)=>setCategory(e.target.value)} />
          <label> Task </label>
          <input placeholder='Enter Todo Task' value={task} onChange={(e)=>settask(e.target.value)} />
          <label> Desc </label>
          <input placeholder='Enter Description' value={desc} onChange={(e)=>setdesc(e.target.value)} />
          
          <button className='bg-black text-white px-6 py-1 ml-2' onClick={addtask}> Add </button>
        </form>
      </div>
      

      {/* Listt */}
      {
        tasks.map((todo)=>(
          <Items todo={todo} removetask={removetask} updatetask={updatetask}/>
      ))
    }
    </div>
  );
}
