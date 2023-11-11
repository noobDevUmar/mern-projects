'use client'
import Image from 'next/image'
import Square from './components/Square'
import { useState } from 'react'

export default function Home() {
  const initalstate = Array(9).fill(null);

  const [box,setBox] = useState(initalstate)
  const [turn,setTurn] = useState('x')
  const [winner,setWinner] = useState("Umer")

  const checkWinner=()=>{
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of combos) {
      const [a, b, c] = combo;

      if (box[a] !== null && box[a] === box[b] && box[b] === box[c])

        return box[a];
    }
    return null;
  }


  const t = checkWinner()
  if(t){
 return <div> {t} is the Winner</div>
 }else {
   console.log("didnt return anything");
 }

  const onClick=(index)=>{
    
    const copiedArray = [...box]
    copiedArray[index] = turn
    setTurn(turn==='x'?'o':'x')
    setBox(copiedArray)

   
 

  }



  return (
 <>
 
 <div className='h-screen max-w-[80vw] mx-auto'>

<div className='grid grid-cols-3 border-2 items-center'>
    
{box.map((item,index)=>(
  <Square key={index} index={index} number={item} onClick={onClick}/>
  )
  )}
 
</div>


 </div>
 </>
  )
}