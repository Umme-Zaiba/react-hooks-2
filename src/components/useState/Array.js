import React, { useState } from 'react'

const Array = () => {
    const [items, setItems]= useState([])
    const addNUmber=()=>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() *10 ) +1
        }])
    }
  return (
    <div>
        <button onClick={addNUmber}>Add a number</button>
      <ul>
        {
            items.map(item =>(
                <li key = {item.id}>{item.value}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Array
