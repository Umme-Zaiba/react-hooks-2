import React, { useState, useEffect } from 'react'

//NON EMPTY DEPENDENCY ARRAY----
const HookCounter2 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useeffect- updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

//We include the second argument inside the useEffect which is actually dependency array
// ---IMPORTANT-----
//Here we include that prop/state which were to change,  the effect would be executed
 
    return (
        <div>
            <input type='text'
                value={name}
                onChange={e =>setName(e.target.value) }
            />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}


export default HookCounter2
