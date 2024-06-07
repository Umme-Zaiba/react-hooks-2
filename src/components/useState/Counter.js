import React, { useState } from 'react'

const Counter = () => {
    const initialState = 0
    const [count, setCount] = useState(initialState);
    return (
        <div>
            <br />
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            The Count is {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>

        </div>
    )
}

export default Counter
