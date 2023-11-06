import React from 'react'

const Items = ({todo,removetask,updatetask}) => {
  return (
    <div className='flex justify-between border-2 border-slate-900 mt-2'>

    <div className='mt-2 flex w-2/4 justify-between '>
      <h2 className='font-semibold text-xl'>{todo.task} </h2>
      <h2 className='font-semibold text-xl'> {todo.desc} </h2>
    </div>
    {todo.iscompleted===true? 
        <h2 className='font-bold text-2xl text-green-500 items-center text-center mt-2'> TaskCompleted </h2>
        :
        <h2 className='font-bold text-2xl text-red-500 items-center text-center mt-2'> pending </h2>
    }

      <div className=''>
      <button className='bg-slate-300 text-black text-semibold font-semibold p-4 mx-2' onClick={()=>updatetask(todo.id)}> Completed </button>
      <button className='bg-green-300 text-black text-semibold font-semibold p-4 mx-2'> Edit  </button>
      <button className='bg-red-400 text-black text-semibold font-semibold p-4 mx-2' onClick={()=>removetask(todo.id)}> Delete </button>
      </div>


    </div>
  )
}

export default Items