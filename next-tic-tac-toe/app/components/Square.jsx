import React from 'react'

const Square = (props) => {
  return (
    <div onClick={()=>props.onClick(props.index)} className='border-2 border-black flex justify-center items-center  p-10 m-2'>
    {props.number}
    
    </div>
  )
}

export default Square