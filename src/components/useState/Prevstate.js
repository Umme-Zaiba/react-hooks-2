// use of PrevState 
import React, { useState } from 'react'

const Prevstate = () => {
    const initialState = 0
    const [count, setCount]= useState(initialState)
    const incrementfive=()=>{
        for (let i=0;i<5;i++)
            setCount(prevCount => prevCount+1)
    }
  return (
    <div>
      <button onClick={()=>setCount(initialState)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      The count is { count } 
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={incrementfive}>Increment by 5</button>
    </div>
  )
}

export default Prevstate
