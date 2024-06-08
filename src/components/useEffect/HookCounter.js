import React, { useState, useEffect } from 'react'

// The useEffect examples which that the ui is rendered after everytime the component is renedered, i.e, 
// the case of WITHOUT DEPENDENCY ARRAY----
const HookCounter = () => {
    const [count, setCount]=useState(0);

    useEffect( ()=>{
        document.title = `You clicked ${count} times`
    })
    //useEffect runs after every time the component renders 
  return (
    <div>
      <button onClick={()=> setCount(count +1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounter
